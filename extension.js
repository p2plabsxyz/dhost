// Dependencies
const vscode = require("vscode");
const { Web3Storage } = require("web3.storage");
const dotenv = require("dotenv");
const { selectFolder } = require("./options");
const { getFilesFromPath } = require("files-from-path");
const fs = require("fs");

// Environment variable paths
const folderPath = __dirname + "/.folderPath.env";
dotenv.config({ path: folderPath });
const apiToken = __dirname + "/.env";
dotenv.config({ path: apiToken });

// web3.storage API token
function getToken() {
  return process.env.API_TOKEN;
}

// Get files from path
async function getFiles(path) {
  const files = await getFilesFromPath(path);
  files.forEach((file) => {
    if (file.name.charAt(0) === "/") {
      file.name = file.name.split("/").slice(2).join("/");
    } else {
      file.name = file.name.split("/").slice(1).join("/");
    }
  });
  return files;
}

// Validate web3.storage API token
function isValidWeb3StorageApiKey(apiKey) {
  const pattern = /^eyJ[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/;
  return pattern.test(apiKey);
}

// Set web3.storage API token
async function setApiToken() {
  const userToken = await vscode.window.showInputBox({
    placeHolder: "Enter your web3.storage API token",
    prompt: "API Token",
    ignoreFocusOut: true,
  });

  if (userToken && isValidWeb3StorageApiKey(userToken)) {
    process.env.API_TOKEN = userToken;
    try {
      fs.writeFileSync(apiToken, `API_TOKEN=${userToken}`);
      vscode.window.showInformationMessage("API token saved!");
      // Set web3.storage API token
      const client = new Web3Storage({ token: getToken() });
    } catch (e) {
      console.log(e);
    }
  } else {
    vscode.window.showWarningMessage(
      "Invalid API key. Please enter a valid web3.storage API key."
    );
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Set web3.storage API token
  context.subscriptions.push(
    vscode.commands.registerCommand("dhost.token", async () => {
      await setApiToken();
    })
  );
  // Select folder
  context.subscriptions.push(
    vscode.commands.registerCommand("dhost.select", async () => {
      await selectFolder();
    })
  );
  // Publish the website to IPFS
  context.subscriptions.push(
    vscode.commands.registerCommand("dhost.publish", async () => {
      let path = process.env.FOLDER_PATH;
      vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Window,
          cancellable: false,
          title: "Publishing the website to IPFS...",
        },
        async (progress) => {
          progress.report({ increment: 0 });
          let publish = async () => {
            // Get files
            const files = await getFiles(path);
            // Set web3.storage API token
            const client = new Web3Storage({ token: getToken() });
            // Upload to IPFS and return a CID
            try {
              const cid = await client.put(files);
              progress.report({ increment: 100 });
              const result = await vscode.window.showInformationMessage(
                `Successfully published! Here's the IPFS CID of your website: ${cid}`,
                "Open the website"
              );
              if (result === "Open the website") {
                vscode.env.openExternal(
                  vscode.Uri.parse(`https://w3s.link/ipfs/${cid}/`)
                );
              }
            } catch (e) {
              const message =
                "Please submit your valid web3.storage API token using the 'dhost.token' command before publishing the website. Instructions are provided on the extension homepage.";
              const action = {
                title: "Set API token",
                command: "dhost.token",
              };
              const selectedAction = await vscode.window.showWarningMessage(
                message,
                action
              );
              if (selectedAction === action) {
                await vscode.commands.executeCommand("dhost.token");
              }
            }
          };
          await publish();
        }
      );
    })
  );
}
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
