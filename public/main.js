let currentAction = null;

function handleInput() {
  const input = document.getElementById("userInput");
  const value = input.value.trim();
  if (!value) return;

  addMessage(value, "user");
  input.value = "";

  // If we're waiting for a follow-up answer
  if (currentAction) {
    handleFollowUp(value);
    return;
  }

  // Context-aware: "how many X do you have?" after checking inventory
  if (value.toLowerCase().includes("how many") && memory.lastProduct) {
    const item = inventory.find(i => i.name === memory.lastProduct);
    if (item) {
      addMessage(`${item.name} currently has ${item.stock} units in stock.`);
    }
    return;
  }

  const menuShortcuts = { "1": "tracking", "2": "inventory", "3": "invoice", "4": "report", "5": "issue" };
  const intent = menuShortcuts[value] || detectIntent(value);

  switch (intent) {
    case "greetings":
      addMessage(getRandomResponse(responses.greetings));
      showMenu();
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

    case "report":
      downloadInventoryPDF();
      break;

    case "issue":
      currentAction = "issue";
      addMessage("Please describe the issue you're facing.");
      break;

    default:
      addMessage(getRandomResponse(responses.fallback));
  }
}

function handleFollowUp(value) {
  if (currentAction === "track") {
    const order = orders.find(o => o.id === value);
    if (order) {
      addMessage(`Order #${order.id}: ${order.status}.\nExpected delivery: ${order.delivery}.`);
      memory.lastOrder = order.id;
    } else {
      addMessage("Order not found. Please double-check the Order ID.");
    }

  } else if (currentAction === "inventory") {
    const item = inventory.find(i => i.name.toLowerCase() === value.toLowerCase());
    if (item) {
      memory.lastProduct = item.name;
      addMessage(`${item.name} has ${item.stock} units available in stock.`);
    } else {
      addMessage("Product not found. Please check the name and try again.");
    }

  } else if (currentAction === "issue") {
    addMessage("Issue reported! Our team will get back to you within 24 hours. Thank you.");
  }

  currentAction = null;
  showMenu();
}

// Start the chat
showMenu();
