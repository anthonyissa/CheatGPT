import { addFile, addFolder, File, Folder, setParent } from "../model.js";
import { getFolderByIdFromRoot } from "../utils/modelUtils.js";

const previousBtn =  document.getElementById("previous");
const newFileBtn = document.getElementById("new-file");
const newFolderBtn = document.getElementById("new-folder");


export const initNavigationMenu = (currentFolder, updateFolder, root) => {
    previousBtn.onclick = () => {
        if(currentFolder.parentId === -1) return;
        updateFolder(getFolderByIdFromRoot(currentFolder.parentId, root));
    };
    newFileBtn.onclick = () => {
        addFile(currentFolder, new File("New File"));
        updateFolder(currentFolder)
    };
    newFolderBtn.onclick = () => {
        const newFolder = new Folder("New Folder", [], []);
        addFolder(currentFolder, newFolder);
        setParent(newFolder, currentFolder.id)
        updateFolder(currentFolder)
    };
} 
