const BACKEND_URL = "https://your-backend-url.onrender.com/chat";

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;
  if (!userText) return;

  chatBox.innerHTML += `<p class="user">You: ${userText}</p>`;

  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();

  chatBox.innerHTML += `<p class="bot">AI: ${data.reply}</p>`;
  input.value = "";
}
