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

export const createFileNode = (file, image) => {
  const fileNode = document.createElement("div");
  fileNode.setAttribute("class", "folder");
  const p = createTextNode(file.name);
  fileNode.appendChild(image);
  fileNode.appendChild(p);
  fileNode.addEventListener("dblclick", () => {alert("test")});
  return fileNode;
};