// scheduler.js

// Emmanuel's file triggers the sync pipeline automatically every 5 minutes.

const { fetchAndSyncInventory } = require('./api-client.js');

const { logEvent } = require('./logger.js');

const FIVE_MINUTES = 5 * 60 * 1000;

logEvent('SYSTEM_START', 'Starting background inventory polling loop (Every 5 minutes)...');

/// Run the sync process on an automatic interval loop

const pollingInterval = setInterval(async () => {
        logEvent('POLL_TRIGGERED', 'Initiating scheduled inventory data pull...');

            await fetchAndSyncInventory();

}, FIVE_MINUTES);

module.exports = { pollingInterval };
})