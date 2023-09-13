import { addToHistories } from "../components/chat";
import { toggleLoading } from "../components/loading";

let isLoading = false;

export const callOpenAi = async (prompt) => {
  const responseElement = document.getElementById("response");
  if (isLoading || prompt.trim().length === 0) return;
  try {
    waitBeforeNextCall();
    toggleLoading(true);
    responseElement.classList.add("hidden");

    const response = await sendOpenAiRequest(prompt);

    responseElement.innerHTML = response;
    responseElement.style.color = "white";
    addToHistories(response, prompt);
  } catch (error) {
    responseElement.innerHTML = error;
    responseElement.style.color = "red";
    console.error({ errorCallOpenAi: error });
  } finally {
    responseElement.classList.remove("hidden");
    toggleLoading(false);
  }
};

const waitBeforeNextCall = () => {
  isLoading = true;
  setTimeout(() => {
    isLoading = false;
  }, 5000);
};

const sendOpenAiRequest = async (prompt) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.KEY);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ prompt }),
    redirect: "follow",
  };

  const rawResults = await fetch(process.env.URL, requestOptions);

  if (!rawResults.ok) {
    console.error(rawResults);
    if (rawResults.status === 401) {
      throw new Error("Make sure the API key is correct.");
    } else if (rawResults.status === 429) {
      throw new Error(
        "You have reached the maximum number of requests per hour."
      );
    } else if (rawResults.status === 500 || rawResults.status === 502) {
      throw new Error("The server is currently unavailable.");
    } else {
      throw new Error("An error occurred.");
    }
  }

  return await rawResults.text();
};
