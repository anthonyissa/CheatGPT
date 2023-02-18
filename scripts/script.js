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
  currentTab,
  firstRender = true;

root = new Folder("root", [], []);

const updateFolder = (folder = null) => {
  if (folder) currentFolder = folder;
  if(firstRender){
    initSideNav(currentTab);
    initPromptForm();
    initViewMenu();
  }
  initNavigationMenu(currentFolder, updateFolder, root);
  if(currentFolder) saveData(root, currentFolder.id, getViewType(), getCurrentTab());
  document.getElementById("context-menu").style.scale = 0;
  render(currentFolder, updateFolder, root);
  firstRender = false;
};

if (localStorage.getItem("root")) {
  let currentFolderId;
  [root, currentFolderId, viewType, currentTab] = getData();
  setCurrentTab(currentTab)
  setViewType(viewType);
  currentFolder = getFolderByIdFromRoot(currentFolderId, root);
  updateFolder(currentFolder);
} 
else {
  updateFolder(root);
}

