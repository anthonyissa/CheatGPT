import { Folder, File } from "./model.js";
import {
  createFileNode,
  createImageNode,
  createTextNode,
} from "./lib/genericNodes.js";

const folderImg = createImageNode("../img/folder.png", "folder-img");
const fileImg = createImageNode("../img/document.png", "folder-img");

const file = new File(
  "Js test",
  "https://chat.openai.com/chat/7e27c254-4be4-493d-a64f-fefbbd3ac89e"
);
const folder = new Folder("folder", [], []);
const root = new Folder("root", [file], [folder]);

let currentFolder = root;

currentFolder.folders.forEach((folder) => {
  document
    .getElementsByClassName("current-folder")[0]
    .appendChild(createFileNode(folder, folderImg));
});

currentFolder.files.forEach((file) => {
  document
    .getElementsByClassName("current-folder")[0]
    .appendChild(createFileNode(file, fileImg));
});
