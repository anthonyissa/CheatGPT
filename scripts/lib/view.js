import { saveData } from "./save.js";

const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");

let viewType = "grid";

const diplayGrid =  () => {
    document.getElementById("current-folder").className = "current-folder";
    gridBtn.style.display = "none";
    listBtn.style.display = "block";
}

const displayList = () => {
    document.getElementById("current-folder").className = "current-folder-row";
    listBtn.style.display = "none";
    gridBtn.style.display = "block";
}

export const initViewMenu = () => {
    gridBtn.onclick = () => {
        setViewType("grid");
    }
    listBtn.onclick = () => {
        setViewType("list");
    }
} 

export const getViewType = () => {
    return viewType;
}

export const setViewType = (type) => {
    viewType = type;
    if(type === "grid") diplayGrid();
    else displayList();
    saveData(null, null, viewType, null);
} 