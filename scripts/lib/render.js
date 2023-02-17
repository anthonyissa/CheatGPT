import { updatePath } from "../utils/modelUtils.js";
import { resetCurrentFolder } from "../utils/nodeUtils.js";
import { createFileNode, createFolderNode, createImageNode } from "./genericNodes.js";

export const render = (currentFolder, updateFolder, root) => {
    updatePath(currentFolder, root);
    resetCurrentFolder();
    if(currentFolder.folders.length !== 0){
        currentFolder.folders.forEach((folder) => {
            document
              .getElementById("current-folder")
              .appendChild(createFolderNode(currentFolder, folder, createImageNode("../img/folder.png", "folder-img"), updateFolder));
          });
    }
    if(currentFolder.files.length !== 0)
    {
        currentFolder.files.forEach((file) => {
          document
            .getElementById("current-folder")
            .appendChild(createFileNode(currentFolder, file, createImageNode("../img/document.png", "folder-img"), updateFolder));
        });
    }
}