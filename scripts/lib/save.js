export const saveData = (root, currentFolder) => {
  localStorage.setItem("root", JSON.stringify(root));
  localStorage.setItem("currentFolder", currentFolder);
};

export const getData = () => {
  return [
    JSON.parse(localStorage.getItem("root")),
    parseInt(localStorage.getItem("currentFolder")),
  ];
};
