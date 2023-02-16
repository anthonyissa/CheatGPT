import { resetCurrentFolder } from "../utils/nodeUtils.js";
import { createFileNode, createFolderNode, createImageNode } from "./genericNodes.js";

export const render = (currentFolder, updateFolder) => {
    resetCurrentFolder();
    if(currentFolder.folders.length !== 0){
        currentFolder.folders.forEach((folder) => {
            document
              .getElementsByClassName("current-folder")[0]
              .appendChild(createFolderNode(currentFolder, folder, createImageNode("../img/folder.png", "folder-img"), updateFolder));
          });
    }
    if(currentFolder.files.length !== 0)
    {
        currentFolder.files.forEach((file) => {
          document
            .getElementsByClassName("current-folder")[0]
            .appendChild(createFileNode(currentFolder, file, createImageNode("../img/document.png", "folder-img"), updateFolder));
        });
    }
}