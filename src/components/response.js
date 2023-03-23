export const createResponseElement = () => {
  const response = document.createElement("p");
  response.id = "response";
  response.classList.add("hidden");
  return response;
};
