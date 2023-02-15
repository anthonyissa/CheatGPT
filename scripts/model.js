export class Folder {
    constructor(name, files, folders){
        this.name = name;
        this.files = files;
        this.folders = folders;
    }

    addFile(file){
        this.files.push(file);
    }
    removeFile(file){
        this.files = this.files.filter(f => f.name !== file.name);
    }

    addFolder(folder){
        this.folders.push(folder);
    }
    removeFolder(folder){
        this.folders = this.folders.filter(f => f.name !== folder.name);
    }
}

export class File {
    constructor(name, url){
        this.name = name;
        this.url = url;
    }
}