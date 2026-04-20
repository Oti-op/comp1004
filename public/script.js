const chat = document.getElementById("chat");

function addMessage(message, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = sender === "bot" 
    ? "bg-gray-200 p-2 rounded-lg self-start"
    : "bg-blue-500 text-white p-2 rounded-lg self-end";

  msg.textContent = message;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function showMenu() {
  addMessage("How can I help you?\n1. Track Order\n2. Check Inventory\n3. Upload Invoice\n4. Report Issue");
}

let currentAction = null;

function handleInput() {
  const input = document.getElementById("userInput");
  const value = input.value.trim();

  if (!value) return;

  addMessage(value, "user");
  input.value = "";

  // If waiting for follow-up
  if (currentAction) {
    handleFollowUp(value);
    return;
  }

  if (value.toLowerCase().includes("how many") && memory.lastProduct) {
  const item = inventory.find(i => i.name === memory.lastProduct);
  addMessage(`${item.name} currently has ${item.stock} units.`);
  return;
}

  const intent = detectIntent(value);

  switch (intent) {
    case "greetings":
      addMessage(getRandomResponse(responses.greetings));
      break;

    case "tracking":
      currentAction = "track";
      addMessage(getRandomResponse(responses.tracking));
      break;

    case "inventory":
      currentAction = "inventory";
      addMessage(getRandomResponse(responses.inventory));
      break;

    case "invoice":
      document.getElementById("fileUpload").click();
      break;

    case "issue":
      currentAction = "issue";
      addMessage("Please describe the issue.");
      break;

    default:
      addMessage(getRandomResponse(responses.fallback));
  }
}

function handleFollowUp(value) {

  if (currentAction === "track") {
    const order = orders.find(o => o.id === value);
    if (order) {
      addMessage(`Order ${order.id}: ${order.status}, Delivery: ${order.delivery}`);
    } else {
      addMessage("Order not found.");
    }
  }

    if (currentAction === "inventory") {
        const item = inventory.find(i => i.name.toLowerCase() === value.toLowerCase());

    if (item) {
        memory.lastProduct = item.name;
        addMessage(`${item.name} has ${item.stock} units available.`);
    } else {
        addMessage("I couldn’t find that product.");
    }
    }

  else if (currentAction === "issue") {
    addMessage("Issue reported. Our team will respond within 24 hours.");
  }

  currentAction = null;
  showMenu();
}

document.getElementById("fileUpload").addEventListener("change", function(e) {
  const file = e.target.files[0];

  if (file) {
    addMessage(`Invoice "${file.name}" uploaded successfully.`);
    showMenu();
  }
});

const knowledgeBase = {
  greetings: ["hi", "hello", "hey"],
  tracking: ["track", "order", "delivery"],
  inventory: ["stock", "available", "inventory"],
  invoice: ["invoice", "receipt", "upload"],
  issue: ["problem", "issue", "complaint"]
};

function detectIntent(input) {
  input = input.toLowerCase();

  for (let intent in knowledgeBase) {
    for (let word of knowledgeBase[intent]) {
      if (input.includes(word)) {
        return intent;
      }
    }
  }

  return "unknown";
}

function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

const responses = {
  greetings: [
    "Hi there! How can I assist you today?",
    "Hello! Need help with orders, inventory, or invoices?",
    "Hey 👋 What can I help you with?"
  ],

  tracking: [
    "Sure, I can help track your order. Please provide your Order ID.",
    "Let’s find your order. What’s the Order ID?",
    "Tracking request noted. Enter your Order ID."
  ],

  inventory: [
    "Checking stock? Tell me the product name.",
    "I can look that up. What product are you interested in?",
    "Let’s check availability. Enter the product name."
  ],

  fallback: [
    "I’m not sure I understood that. Try asking about orders, stock, or invoices.",
    "Hmm… I didn’t catch that. Can you rephrase?",
    "I can help with tracking, inventory, or invoices."
  ]
};

let memory = {
  lastProduct: null,
  lastOrder: null
};

showMenu();
