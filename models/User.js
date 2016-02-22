/**
 * JSON based Schema model for mongo database.
 */

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('user', UserSchema);
