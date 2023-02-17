export const saveData = (root, currentFolder, viewType, currentTab) => {
  if(root) localStorage.setItem("root", JSON.stringify(root));
  if(currentFolder) localStorage.setItem("currentFolder", currentFolder);
  if(viewType) localStorage.setItem("view", viewType);
  if(currentTab) localStorage.setItem("currentTab", currentTab);
};

export const getData = () => {
  return [
    JSON.parse(localStorage.getItem("root")),
    parseInt(localStorage.getItem("currentFolder")),
    localStorage.getItem("view"),
    localStorage.getItem("currentTab"),
  ];
};
