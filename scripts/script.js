import { Folder, File, setParent } from "./model.js";
import { initNavigationMenu } from "./lib/navigation.js";
import { render } from "./lib/render.js";

const file = new File(
  "Js test",
  "https://chat.openai.com/chat/7e27c254-4be4-493d-a64f-fefbbd3ac89e"
);

let root, folder, currentFolder;

// if(localStorage.getItem("root")){
//     root = JSON.parse(localStorage.getItem("root"));
//     console.log(root)
// } else {
//     folder = new Folder("folder", [], []);
//     root = new Folder("root", [file], [folder]);
//     // folder.setParent(root);
// }

folder = new Folder("folder", [], []);
root = new Folder("root", [file], [folder]);
setParent(folder, root.id);

if(localStorage.getItem("root")){
    root = JSON.parse(localStorage.getItem("root"));
}

const updateFolder = (folder) => {
    currentFolder = folder;
    initNavigationMenu(currentFolder, updateFolder, root);
    localStorage.setItem("root", JSON.stringify(root));

    render(currentFolder, updateFolder);
}

updateFolder(root);