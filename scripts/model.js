let fileId = 0;
export class Folder {


  constructor(name, files, folders = []) {
    this.id = new Date().getTime();
    this.name = name;
    this.files = files;
    this.folders = folders;
    this.parentId = -1;
  }
}

export class File {

  constructor(name, url = "https://chat.openai.com/") {
    this.id = new Date().getTime();
    this.name = name;
    this.url = url;
  }
}

export const setParent = (folder, parent) => {
  folder.parentId = parent;
};

export const addFile = (folder, file) => {
  folder.files.push(file);
};
export const removeFile = (folder, file) => {
  folder.files = folder.files.filter((f) => f.name !== file.name);
};

export const addFolder = (folder, newFolder) => {
  folder.folders.push(newFolder);
};
export const removeFolder = (folder, folderToRemove) => {
  folder.folders = folder.folders.filter((f) => f.name !== folderToRemove.name);
};
