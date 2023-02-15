export const createImageNode = (imageUrl, className) => {
  const img = document.createElement("img");
  img.setAttribute("class", className);
  img.setAttribute("src", imageUrl);
  return img;
};

export const createTextNode = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

const createNode = (file, image) => {
  const fileNode = document.createElement("div");
  fileNode.setAttribute("class", "folder");
  const p = createTextNode(file.name);
  fileNode.appendChild(image);
  fileNode.appendChild(p);
  return fileNode;
};

export const createFileNode = (file, image) => {
  const fileNode = createNode(file, image);
  fileNode.addEventListener("dblclick", () => {
    window.open(file.url, "_blank");
  });
  return fileNode;
};

export const createFolderNode = (folder, image, callback) => {
  const folderNode = createNode(folder, image);
  folderNode.addEventListener("dblclick", () => {
    callback(folder);
  });
  return folderNode;
};
