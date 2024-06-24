const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
  {
    name:{ 
      tpe: String,
      required: true,
    },
    damage_type: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    rarity:{
      type: String,
      required: true,
    },
    affiliations: [
      {
        type: String,
      },
    ],
  },
);

const Character = model('character', characterSchema);

module.exports = Character;
