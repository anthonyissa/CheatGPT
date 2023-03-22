import { initChat } from "./components/chat";

const button = document.createElement("button");
button.className = "absolute-btn hidden";
button.innerText = "Click me";
document.body.appendChild(button);

const chat = initChat();

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === ",") {
    button.classList.toggle("hidden");
    chat.classList.toggle("hidden");
  }
});
