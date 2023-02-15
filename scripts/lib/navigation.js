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
        addFile(currentFolder, new File("new file", "https://www.google.com"));
        updateFolder(currentFolder)
    };
    newFolderBtn.onclick = () => {
        const newFolder = new Folder("new folder", [], []);
        addFolder(currentFolder, newFolder);
        setParent(newFolder, currentFolder.id)
        console.log(newFolder)
        updateFolder(currentFolder)
    };
} 
