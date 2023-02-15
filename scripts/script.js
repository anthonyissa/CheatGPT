import { Folder, File } from "./model.js";
import {
  createFileNode,
  createFolderNode,
  createImageNode,
} from "./lib/genericNodes.js";
import { initNavigationMenu } from "./lib/navigation.js";
import { resetCurrentFolder } from "./utils/nodeUtils.js";

const folderImg = createImageNode("../img/folder.png", "folder-img");
const fileImg = createImageNode("../img/document.png", "folder-img");

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
    folder.setParent(root);

const updateFolder = (folder) => {
    currentFolder = folder;
    initNavigationMenu(currentFolder, updateFolder);
    resetCurrentFolder();
    // localStorage.setItem("root", JSON.stringify(root));

    if(currentFolder.folders.length !== 0){
        currentFolder.folders.forEach((folder) => {
            document
              .getElementsByClassName("current-folder")[0]
              .appendChild(createFolderNode(folder, folderImg, updateFolder));
          });
    }
    if(currentFolder.files.length !== 0)
    {
        currentFolder.files.forEach((file) => {
          document
            .getElementsByClassName("current-folder")[0]
            .appendChild(createFileNode(file, fileImg));
        });
    }
}

updateFolder(root);