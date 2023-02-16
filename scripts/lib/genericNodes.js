import { fileType, regex } from "../utils/enum.js";
import { openPrompt } from "../utils/modelUtils.js";

let mouseX, mouseY;
let currentTimeout;
const menu = document.getElementById("context-menu");
const deleteBtn = document.getElementById("delete-btn");
const linkBtn = document.getElementById("link-btn");
const editBtn = document.getElementById("edit-btn");
document.onmousemove = function(e) {
  mouseX = e.pageX; 
  mouseY = e.pageY;
};  

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

export const createFileNode = (parent, file, image, callback) => {
  const fileNode = createNode(file, image);
  fileNode.ondblclick = () => {
    window.open(file.url, "_blank");
  };
  fileNode.oncontextmenu = (event) => handleContextMenu(event, parent, file, fileType.FILE, callback);
  return fileNode;
};

export const createFolderNode = (parent, folder, image, callback) => {
  const folderNode = createNode(folder, image);
  folderNode.ondblclick = () => {
    callback(folder);
  };
  folderNode.oncontextmenu = (event) => handleContextMenu(event, parent, folder, fileType.FOLDER, callback);
  return folderNode;
};

const handleContextMenu = (event, parent, doc, filetype, callback) => {
  event.preventDefault();
  clearTimeout(currentTimeout);
  menu.style.scale = 1;
  if(filetype === fileType.FILE) linkBtn.style.display = "block";
  else linkBtn.style.display = "none";
  menu.style.top = (mouseY - 30) + "px";
  menu.style.left = mouseX + "px";
  linkBtn.onclick = () => {
    const oldLink = doc.url;
    let newLink = prompt("Enter new chatGPT link", doc.url);
    if(newLink == "" || regex.onlyWhitespaces.test(newLink) || !regex.chatGPTLink.test(newLink)) doc.url = oldLink;
    else doc.url = newLink;
    callback();
  };
  editBtn.onclick = () => {
    openPrompt(doc, filetype)
    callback();
  };
  deleteBtn.onclick = () => {
    if(filetype === fileType.FOLDER) {
      const index = parent.folders.indexOf(doc);
      parent.folders.splice(index, 1);
    }
    else if(filetype === fileType.FILE) {
      const index = parent.files.indexOf(doc);
      parent.files.splice(index, 1);
    }
    callback();
  }
  currentTimeout = setTimeout(() => {menu.style.scale = 0}, 2000);
}