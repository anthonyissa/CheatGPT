import { callOpenAi } from "../services/openai";
import { createInfoElement } from "./info";
import { createInputElement } from "./input";
import { createLoadingElement } from "./loading";
import { createResponseElement } from "./response";

let responseHistory = [];
let promptHistory = [];
let historyCursor = 0;

const createChatElement = () => {
  const div = document.createElement("div");
  div.className = "chat-0x4874578 hidden";
  return div;
};

export const initChat = () => {
  const div = createChatElement();
  const response = createResponseElement();
  const input = createInputElement();
  const loading = createLoadingElement();
  const info = createInfoElement();
  
  div.appendChild(loading);
  div.appendChild(response);
  div.appendChild(input);
  div.appendChild(info);
  
  document.body.appendChild(div);
  
  listenToKeyEvents(input);
  return div;
};

export const addToHistories = (response, prompt) => {
  responseHistory.push(response);
  promptHistory.push(prompt);
  historyCursor++;
}

export const navigateHistory = (event) => {
  const input = document.querySelector(".chat-0x4874578 textarea");
  const response = document.querySelector(".chat-0x4874578 #response");
  if (event.ctrlKey && event.key === "ArrowUp") {
    if(historyCursor === promptHistory.length) return;
    historyCursor++;
  }
  else if (event.ctrlKey && event.key === "ArrowDown") {
    if(historyCursor === 1) return;
    historyCursor--;
  }
  input.value = promptHistory[historyCursor-1];
  response.innerHTML = responseHistory[historyCursor-1];
}

const listenToKeyEvents = (input) => {
  input.addEventListener("keydown", async function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      await callOpenAi(input.value);
    }
    if (event.ctrlKey && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
      navigateHistory(event);
    }
  });
}