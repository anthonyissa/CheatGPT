export class Folder {

    static id = 0;

  constructor(name, files, folders = []) {
    this.id = Folder.id++;
    this.name = name;
    this.files = files;
    this.folders = folders;
    this.parentId = -1;
  }
}

export class File {

  static id = 0;

  constructor(name, url = "https://chat.openai.com/") {
    this.id = File.id++;
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
