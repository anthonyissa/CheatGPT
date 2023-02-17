import { addFile, addFolder, File, Folder, setParent } from "../model.js";
import { fileType } from "../utils/enum.js";
import { getFolderByIdFromRoot, openPrompt } from "../utils/modelUtils.js";

const previousBtn =  document.getElementById("previous");
const newFileBtn = document.getElementById("new-file");
const newFolderBtn = document.getElementById("new-folder");


export const initNavigationMenu = (currentFolder, updateFolder, root) => {
    previousBtn.onclick = () => {
        if(currentFolder.parentId === -1) return;
        updateFolder(getFolderByIdFromRoot(currentFolder.parentId, root));
    };
    newFileBtn.onclick = () => {
        const newFile = new File("New Chat");
        openPrompt(newFile, fileType.FILE)
        addFile(currentFolder, newFile);
        updateFolder(currentFolder)
    };
    newFolderBtn.onclick = () => {
        const newFolder = new Folder("New Folder", [], []);
        openPrompt(newFolder, fileType.FOLDER)
        addFolder(currentFolder, newFolder);
        setParent(newFolder, currentFolder.id)
        updateFolder(currentFolder)
    };
} 
