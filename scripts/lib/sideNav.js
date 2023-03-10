import { saveData } from "./save.js";

let currentTab = "folder";
const folderTabBtn = document.getElementById("folder-tab-btn");
const promptTabBtn = document.getElementById("prompt-tab-btn");
const folderTab = document.getElementById("folder-tab");
const promptTab = document.getElementById("prompt-tab");
const asideFolderTab = document.getElementById("aside-folder-tab");

export const initSideNav = (tab) => {
    if(tab) changeTab(tab);
    else changeTab("folder");
    folderTabBtn.onclick = () => {
        changeTab("folder");
    };
    promptTabBtn.onclick = () => {
        changeTab("prompt");
    };
    setTimeout(() => {
        for(let i = 0; i < document.getElementsByTagName("main").length; i++) {
            document.getElementsByTagName("main")[i].style.transition = "all 0.2s ease-in-out";
        }
    }, 100);
}

export const changeTab = (tab) => {
    if(tab === "undefined") currentTab = tab;
    else currentTab = tab;
    if(tab === "folder") {
        folderTab.style.display = "block";
        // promptTab.style.display = "none";
        promptTab.classList.add("move")
        folderTab.classList.remove("move")

        folderTabBtn.classList.add("active");
        promptTabBtn.classList.remove("active");
        asideFolderTab.style.display = "flex";
    }
    else if(tab === "prompt") {
        // folderTab.style.display = "none";
        promptTab.style.display = "block";
        folderTab.classList.add("move")
        promptTab.classList.remove("move")

        folderTabBtn.classList.remove("active");
        promptTabBtn.classList.add("active");
        asideFolderTab.style.display = "none";
    }
    saveData(null, null, null, tab)
}   

export const getCurrentTab = () => {
    return currentTab;
}

export const setCurrentTab = (tab) => {
    changeTab(tab);
}

