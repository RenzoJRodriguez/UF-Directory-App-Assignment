/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  address: String
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  // Gets the current date
  let currentDate = new Date();

  // Changes the updated_at field to current date
  this.updated_at = currentDate;

  // If created_at doesn't exist, add it as a field
  if(!this.created_at){
    this.created_at = currentDate;
  }

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
