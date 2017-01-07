var mongoose = require('mongoose');

var ArtistSchema = new mongoose.Schema({
  artist: String,
  album: String,
  albumImgUrl: String,
  albumBlurImgUrl: String,
  songs: [
    {songName: String,
     songUrl: String}
  ],
  bio: String,
  socialmedia: [
    {facebookUrl: String,
     instagramUrl: String,
     twitterUrl: String,
     soundCloudUrl: String,
     snapchatUsername: String}
  ],
  featured: Boolean
});

module.exports = mongoose.model('Artist', ArtistSchema);
