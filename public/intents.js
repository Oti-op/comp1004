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
