export let selectedModel = "gpt-3.5-turbo";

export const createModelElement = () => {
  const model = document.createElement("select");
  model.className = "model";
  model.innerHTML = `
    <option value="gpt-3.5-turbo">GPT 3</option>
    <option value="gpt-4">GPT 4</option>
    `;
  model.addEventListener("change", (event) => {
    selectedModel = event.target.value;
  });
  return model;
};
