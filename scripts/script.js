import { Folder } from "./model.js";
import { initNavigationMenu } from "./lib/navigation.js";
import { render } from "./lib/render.js";
import { getData, saveData } from "./lib/save.js";
import { getFolderByIdFromRoot } from "./utils/modelUtils.js";
import { getViewType, initViewMenu, setViewType } from "./lib/view.js";
import { initPromptForm } from "./lib/form.js";
import { getCurrentTab, initSideNav, setCurrentTab } from "./lib/sideNav.js";


let root,
  currentFolder, 
  viewType,
  currentTab;

root = new Folder("root", [], []);

const updateFolder = (folder = null) => {
  if (folder) currentFolder = folder;
  initNavigationMenu(currentFolder, updateFolder, root);
  initSideNav(currentTab);
  initPromptForm();
  initViewMenu();
  if(currentFolder) saveData(root, currentFolder.id, getViewType(), getCurrentTab());
  document.getElementById("context-menu").style.scale = 0;
  render(currentFolder, updateFolder, root);
};

if (localStorage.getItem("root")) {
  let currentFolderId;
  [root, currentFolderId, viewType, currentTab] = getData();
  console.log(currentTab)
  setCurrentTab(currentTab)
  setViewType(viewType);
  currentFolder = getFolderByIdFromRoot(currentFolderId, root);
  updateFolder(currentFolder);
} 
else {
  updateFolder(root);
}

