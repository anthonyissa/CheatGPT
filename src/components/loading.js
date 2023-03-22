import { loadingSVG } from "../utils";

export const createLoadingElement = () => {
  const loading = document.createElement("div");
  loading.className = "loading hidden";
  loading.innerHTML = loadingSVG;
  return loading;
};
