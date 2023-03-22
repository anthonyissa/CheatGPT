export const initChat = () => {
  const div = document.createElement("div");
  const response = document.createElement("p");
  const input = document.createElement("textarea");
  div.className = "chat-xaxaxixi hidden";
  response.id = "response";
  div.appendChild(response);
  div.appendChild(input);
  document.body.appendChild(div);
  input.addEventListener("keydown", async function (event) {
    if (event.ctrlKey && event.key === "Enter") {
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
    
    const rawResults = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const textResults = await rawResults.text();
    const jsonResults = JSON.parse(textResults);
    const messageWithLineBreaks = jsonResults.choices[0].message.content.replace(/\n/g, '<br>')
    document.getElementById("response").innerHTML = messageWithLineBreaks;
};

