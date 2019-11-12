const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream
('ka_data.csv');


module.exports = (knex, row) => {
  return knex('radicals')
  .insert({ 
    kanji: row., 
    ranking: row.,
    kname: row., 
    kstroke: row., 
    kmeaning: row., 
    kgrade: row., 
    kunyomi_ja: row., 
    kunyomi: row., 
    onyomi_ja: row., 
    onyomi: row., 
    examples: row., 
    radical: row., 
    rad_order: row., 
    rad_stroke: row., 
    rad_name_ja: row., 
    rad_name: row., 
    rad_meaning: row., 
    rad_position_ja: row., 
    rad_position: row.,
  })
  .then(() => knex('radicals').select());
};