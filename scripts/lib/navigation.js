import { File, Folder } from "../model.js";

const previousBtn =  document.getElementById("previous");
const newFileBtn = document.getElementById("new-file");
const newFolderBtn = document.getElementById("new-folder");


export const initNavigationMenu = (currentFolder, updateFolder) => {
    previousBtn.onclick = () => {
        if(!currentFolder.parent) return;
        updateFolder(currentFolder.parent);
    };
    newFileBtn.onclick = () => {
        console.log("NEW FILE LE S")
        currentFolder.addFile(new File("new file", "https://www.google.com"));
        updateFolder(currentFolder)
    };
    newFolderBtn.onclick = () => {
        const newFolder = new Folder("new folder", [], []);
        currentFolder.addFolder(newFolder);
        newFolder.setParent(currentFolder);
        updateFolder(currentFolder)
    };
} 
