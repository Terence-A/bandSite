const { Band } = require("../models/Band");

const bandData = [
  {
    band_name: "Matt Mays",
    band_size: 6,
    show_ready: true,
    genre: "rock",
  },
  {
    band_name: "Sublime",
    band_size: 3,
    show_ready: true,
    genre: "Ska",
  },
  {
    band_name: "Bob Marley",
    band_size: 8,
    show_ready: true,
    genre: "Reggae",
  },
];

const seedBands = () => Band.bulkCreate(bandData);

module.exports = seedBands;
