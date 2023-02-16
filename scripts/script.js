import { Folder, File, setParent } from "./model.js";
import { initNavigationMenu } from "./lib/navigation.js";
import { render } from "./lib/render.js";

const file = new File(
  "New File"
);

let root, folder, currentFolder;

folder = new Folder("folder", [], []);
root = new Folder("root", [file], [folder]);
setParent(folder, root.id);

if(localStorage.getItem("root")){
    root = JSON.parse(localStorage.getItem("root"));
}

const updateFolder = (folder = null) => {
    if(folder) currentFolder = folder;
    initNavigationMenu(currentFolder, updateFolder, root);
    localStorage.setItem("root", JSON.stringify(root));
    document.getElementById("context-menu").style.scale = 0
    render(currentFolder, updateFolder);
}

updateFolder(root);