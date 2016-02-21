/**
 * Binds URL paths to a custom controller for handling.
 */

module.exports = {
  '/entry': require('./controllers/EntryController'),
  '/user': require('./controllers/UserController')
};