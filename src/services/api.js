import { addToHistories } from "../components/chat";
import { toggleLoading } from "../utils";

let isLoading = false;

export const callOpenAi = async (prompt) => {
  const responseElement = document.getElementById("response");
  if (isLoading) return;
  try{
    waitBeforeNextCall();
    toggleLoading(true);
    responseElement.classList.add("hidden");
    
    const response = await sendOpenAiRequest(prompt);

    responseElement.innerHTML = response;
    responseElement.classList.remove("hidden");
    addToHistories(response, prompt);
  } catch( error ){
    console.error({errorCallOpenAi: error});
  } finally {
    toggleLoading(false);
  }
};

const waitBeforeNextCall = () => {
  isLoading = true;
  setTimeout(() => {
    isLoading = false;
  }, 5000);
}

const sendOpenAiRequest = async (prompt) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer "+process.env.KEY);

  var raw = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "user",
        "content": prompt
      }
    ]
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const rawResults = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
  const textResults = await rawResults.text();
  const jsonResults = JSON.parse(textResults); 
  return jsonResults.choices[0].message.content.replace(/\n/g, '<br>').replace("  ", "&emsp;"); 
} 