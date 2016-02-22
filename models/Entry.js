/**
 * JSON based Schema model for mongo database.
 */

var mongoose = require('mongoose');

// Create the EntrySchema.
var EntrySchema = new mongoose.Schema({
  name: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('entry', EntrySchema);
