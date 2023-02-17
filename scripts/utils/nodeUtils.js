export const resetCurrentFolder = () => {
    document.getElementById("current-folder").innerHTML = "";
}

export const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
}   