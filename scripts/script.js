import { Folder, File, setParent } from "./model.js";
import { initNavigationMenu } from "./lib/navigation.js";
import { render } from "./lib/render.js";
import { getData, saveData } from "./lib/save.js";
import { getFolderByIdFromRoot } from "./utils/modelUtils.js";

const file = new File("New File");

let root,
  folder,
  currentFolder;

root = new Folder("root", [], []);

const updateFolder = (folder = null) => {
  if (folder) currentFolder = folder;
  initNavigationMenu(currentFolder, updateFolder, root);
  if(currentFolder) saveData(root, currentFolder.id);
  document.getElementById("context-menu").style.scale = 0;
  render(currentFolder, updateFolder, root);
};

if (localStorage.getItem("root")) {
  let currentFolderId;
  [root, currentFolderId] = getData();
  currentFolder = getFolderByIdFromRoot(currentFolderId, root);
  updateFolder(currentFolder);
} 
else {
  updateFolder(root);
}

