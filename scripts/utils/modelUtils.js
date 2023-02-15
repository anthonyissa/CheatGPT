export const getFolderByIdFromRoot = (id, root) => {
    if(root.id === id) return root;
    let currentFolders = root.folders;
    while(currentFolders.length !== 0){
        const foundFolder = currentFolders.find((folder) => folder.id === id);
        if(foundFolder) return foundFolder;
        currentFolders = currentFolders.reduce((acc, folder) => [...acc, ...folder.folders], []);
    }
    return -1;
}