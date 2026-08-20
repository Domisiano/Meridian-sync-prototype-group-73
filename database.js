// database.js
const { logEvent } = require('./logger.js');

// Mock database object serving as local cache
const localDatabaseCache = {};

function saveInventoryToCache(itemsArray) {
  itemsArray.forEach(item => {
    localDatabaseCache[item.itemId] = {
      stockCount: item.stockCount,
      status: item.status,
      lastUpdated: new Date().toISOString()
    };
  });
  logEvent('DATABASE_UPDATE', `Local cache synchronized with ${itemsArray.length} items.`);
}

module.exports = { saveInventoryToCache, localDatabaseCache };