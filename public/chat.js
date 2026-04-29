const chat = document.getElementById("chat");

let memory = {
  lastProduct: null,
  lastOrder: null
};

function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.style.whiteSpace = "pre-line";

  if (sender === "bot") {
    msg.className = "chat-bubble-bot";
  } else {
    msg.className = "chat-bubble-user";
  }

  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function showMenu() {
  addMessage("How can I help you?\n1. Track Order\n2. Check Inventory\n3. Upload Invoice (CSV or PDF)\n4. Download Inventory Report\n5. Report Issue");
}
