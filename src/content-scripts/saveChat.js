export const saveChatNodeButton = () => {
  const buttonNode = document.createElement("button");

buttonNode.onclick = () => {
    
};
  const svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgNode.setAttribute("fill", "none");
  svgNode.setAttribute("viewBox", "0 0 24 24");
  svgNode.setAttribute("stroke-width", "1.5");
  svgNode.setAttribute("stroke", "currentColor");
  svgNode.setAttribute("class", "w-6 h-6");

  const pathNode = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathNode.setAttribute("stroke-linecap", "round");
  pathNode.setAttribute("stroke-linejoin", "round");
  pathNode.setAttribute(
    "d",
    "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
  );

  svgNode.appendChild(pathNode);
  buttonNode.appendChild(svgNode);
  return buttonNode;
};
