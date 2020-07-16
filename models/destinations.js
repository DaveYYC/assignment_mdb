const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    id:           Number,
    title:        String,
    description:  String,
    link:         String,
    
  }
);

module.exports = mongoose.model('Destinations', gallerySchema);

