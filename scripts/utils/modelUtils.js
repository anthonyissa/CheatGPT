import { fileType, regex } from "./enum.js";

export const getFolderByIdFromRoot = (id, root) => {
  if (root.id === id) return root;
  let currentFolders = root.folders;
  while (currentFolders.length !== 0) {
    const foundFolder = currentFolders.find((folder) => folder.id === id);
    if (foundFolder) return foundFolder;
    currentFolders = currentFolders.reduce(
      (acc, folder) => [...acc, ...folder.folders],
      []
    );
  }
  return -1;
};

export const openPrompt = (doc, filetype) => {
  const oldName = doc.name;
  let newName;
  if (filetype === fileType.FOLDER)
    newName = prompt("Enter new folder name (MAX 20 CHARACTERS)", doc.name);
  else if (filetype === fileType.FILE)
    newName = prompt("Enter new file name (MAX 20 CHARACTERS)", doc.name);

  if (newName == "" || regex.onlyWhitespaces.test(newName)) doc.name = oldName;
  else doc.name = newName.substring(0, 20);
};

export const updatePath = (folder, root) => {
    let path = "";
    let currentFolder = folder;
    while (currentFolder.parentId !== -1) {
        path = `/${currentFolder.name}${path}`;
        currentFolder = getFolderByIdFromRoot(currentFolder.parentId, root);
    }
    document.getElementById("path").innerHTML = path.length != 0 ? path : "/";
}