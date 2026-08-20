// logger.js
// Created by Domisiano: The Logger & Liaison

function logEvent(eventType, message) {
  const timestamp = new Date().toISOString();
  console.log(`[\${timestamp}] [\${eventType}] - \${message}`);
}

module.exports = { logEvent };
