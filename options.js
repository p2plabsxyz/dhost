const { window, workspace } = require("vscode");
const fs = require("fs");
const folderPath = __dirname + "/.folderPath.env";

async function selectFolder() {
  const options = {
    canSelectMany: false,
    openLabel: "Open",
    canSelectFolders: true,
    canSelectFiles: false,
  };

  const fileUri = await window.showOpenDialog(options);
  if (fileUri && fileUri[0]) {
    let selectFolderPath = fileUri[0].fsPath;
    process.env.FOLDER_PATH = selectFolderPath;
    try {
      fs.writeFileSync(folderPath, `FOLDER_PATH=${selectFolderPath}`);
      window.showInformationMessage(`Folder selected!`);
    } catch (e) {
      console.log(e);
    }
  } else {
    let message = "Folder not found! Please try again.";
    window.showInformationMessage(message);
  }
}

// Function to get the current workspace folder path or undefined if not available
function getCurrentWorkspaceFolderPath() {
  const folders = workspace.workspaceFolders;
  return folders && folders.length > 0 ? folders[0].uri.fsPath : undefined;
}

module.exports = {
  selectFolder,
  getCurrentWorkspaceFolderPath,
};
