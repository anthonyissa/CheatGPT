import { Folder } from "./model.js";
import { initNavigationMenu } from "./lib/navigation.js";
import { render } from "./lib/render.js";
import { getData, saveData } from "./lib/save.js";
import { getFolderByIdFromRoot } from "./utils/modelUtils.js";
import { getViewType, initViewMenu, setViewType } from "./lib/view.js";


let root,
  currentFolder, 
  viewType;

root = new Folder("root", [], []);

const updateFolder = (folder = null) => {
  if (folder) currentFolder = folder;
  initNavigationMenu(currentFolder, updateFolder, root);
  initViewMenu();
  if(currentFolder) saveData(root, currentFolder.id, getViewType());
  document.getElementById("context-menu").style.scale = 0;
  render(currentFolder, updateFolder, root);
};

if (localStorage.getItem("root")) {
  let currentFolderId;
  [root, currentFolderId, viewType] = getData();
  setViewType(viewType);
  currentFolder = getFolderByIdFromRoot(currentFolderId, root);
  updateFolder(currentFolder);
} 
else {
  updateFolder(root);
}

