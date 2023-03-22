import { initChat } from "./components/chat";

const chat = initChat();

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === ",") {
    chat.classList.toggle("hidden");
  }
});
