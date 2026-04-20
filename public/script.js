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

  // If waiting for extra input
  if (currentAction) {
    handleFollowUp(value);
    return;
  }

  switch (value) {
    case "1":
      currentAction = "track";
      addMessage("Enter Order ID:");
      break;

    case "2":
      currentAction = "inventory";
      addMessage("Enter product name:");
      break;

    case "3":
      document.getElementById("fileUpload").click();
      break;

    case "4":
      currentAction = "issue";
      addMessage("Describe the issue:");
      break;

    default:
      addMessage("Please select a valid option.");
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

  else if (currentAction === "inventory") {
    const item = inventory.find(i => i.name.toLowerCase() === value.toLowerCase());
    if (item) {
      addMessage(`${item.name} has ${item.stock} units in stock.`);
    } else {
      addMessage("Product not found.");
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

showMenu();
