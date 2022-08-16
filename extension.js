// Dependencies
const vscode = require("vscode");
const { Web3Storage } = require("web3.storage");
const dotenv = require("dotenv");
const { selectFolder } = require("./options");
const { getFilesFromPath } = require("files-from-path");

// Environment variable paths
const folderPath = __dirname + "/.folderPath.env";
dotenv.config({ path: folderPath });
const apiToken = __dirname + "/.env";
dotenv.config({ path: apiToken });

// web3.storage API token
const token = process.env.API_TOKEN;
const client = new Web3Storage({ token });

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

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
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
            // Upload to IPFS and return a CID
            const cid = await client.put(files);
            progress.report({ increment: 100 });
            const result = await vscode.window.showInformationMessage(
              `Successfully published! Here's the IPFS CID of your website: ${cid}`,
              "Open the website"
            );
            if (result === "Open the website") {
              vscode.env.openExternal(
                vscode.Uri.parse(`https://dweb.link/ipfs/${cid}/`)
              );
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
