export const initChat = () => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  div.className = "chat hidden";
  div.appendChild(input);
  document.body.appendChild(div);
  input.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
      await callOpenAi(input.value);
    }
  });
  return div;
};

const callOpenAi = async (prompt) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer sk-");
    
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
    
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
};

