export const createInputElement = () => {
  const input = document.createElement("textarea");
  input.placeholder = "Type your prompt here and press Ctrl+Enter to send.";
  return input;
};
