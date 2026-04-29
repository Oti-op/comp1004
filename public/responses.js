const knowledgeBase = {
  greetings: ["hi", "hello", "hey", "good morning", "good afternoon"],
  tracking:  ["track", "order", "delivery", "shipment", "where is"],
  inventory: ["stock", "available", "inventory", "how much", "how many"],
  invoice:   ["invoice", "receipt", "upload", "file"],
  report:    ["report", "download", "export", "pdf"],
  issue:     ["problem", "issue", "complaint", "wrong", "broken"]
};

const responses = {
  greetings: [
    "Hi there! How can I assist you today?",
    "Hello! Need help with orders, inventory, or invoices?",
    "Hey! What can I help you with?"
  ],
  tracking: [
    "Sure! What's your Order ID?",
    "Let's find your order. Enter the Order ID.",
    "Tracking request noted. What's the Order ID?"
  ],
  inventory: [
    "Checking stock? Tell me the product name.",
    "What product would you like to check?",
    "Let's check availability. Enter the product name."
  ],
  fallback: [
    "I'm not sure I understood that. Try asking about orders, stock, or invoices.",
    "Hmm, I didn't catch that. Can you rephrase?",
    "I can help with tracking, inventory, invoices, or reports."
  ]
};

function getRandomResponse(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
