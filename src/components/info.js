import { infoSVG } from "../utils";

export const createInfoElement = () => {
  const infoContent = document.createElement("div");
  infoContent.className = "info-content hidden";
  infoContent.innerHTML = `
  <h1>Ctrl+² ➡️ Toggle chat window</h1>
  <h1>Ctrl+Enter ➡️ Send chatGPT request</h1>
    <h1>Ctrl+ArrowUp ➡️ Forward history</h1>
    <h1>Ctrl+ArrowDown ➡️ Backward history</h1>
        `;
  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = infoSVG;
  info.addEventListener("mouseenter", (event) => {
    infoContent.classList.remove("hidden");
  });
  info.addEventListener("mouseleave", (event) => {
    infoContent.classList.add("hidden");
  });
  info.appendChild(infoContent);
  return info;
};
