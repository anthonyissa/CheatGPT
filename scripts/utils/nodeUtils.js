export const resetCurrentFolder = () => {
    document.getElementById("current-folder").innerHTML = "";
}

export const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
}   

export const getElementByXpath = (path) => {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}