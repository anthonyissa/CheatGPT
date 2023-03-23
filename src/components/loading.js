import { loadingSVG } from "../utils";

export const createLoadingElement = () => {
  const loading = document.createElement("div");
  loading.className = "loading hidden";
  loading.innerHTML = loadingSVG;
  return loading;
};

export const toggleLoading = (bool) => {
    const loadingElement = document.getElementsByClassName("loading")[0];
    if (bool) {
      loadingElement.classList.remove("hidden");
    }
    else {
      loadingElement.classList.add("hidden");
    }
  };
  