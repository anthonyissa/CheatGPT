export const saveData = (root, currentFolder, viewType) => {
  if(root) localStorage.setItem("root", JSON.stringify(root));
  if(currentFolder) localStorage.setItem("currentFolder", currentFolder);
  localStorage.setItem("view", viewType);
};

export const getData = () => {
  return [
    JSON.parse(localStorage.getItem("root")),
    parseInt(localStorage.getItem("currentFolder")),
    localStorage.getItem("view"),
  ];
};
