const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream
('ka_data.csv');
var count = 0; // cache the running count
//var pg = require('knex')({client: 'pg'});
//const knex = require("knex");

// const knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//      filename: "./radicals.sqlite"
//   },
//   useNullAsDefault: true
// });



var knex = require('knex')({
  client: 'pg',
  version: '7.12.1',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : "",
    database : 'radicals'
  }
});


// COPY table_name FROM 'path/to/data.csv' DELIMITER ',' CSV HEADER;

// CREATE TABLE kanji (dummy INTEGER NOT NULL PRIMARY KEY)
//     ;

//     COPY kanji FROM '/Users/kanaishibashi/Documents/Baru/Solo Projects/data-for-kanji/kanji-data-media/language-data/ka_data.csv' DELIMITER ',' CSV HEADER;

  //TODO
  //Add a "strenght" column to the database. Then it will be pososible to choose the minimum value

  convertKanji = async (rawFile) => {
    const parseFile = (rawFile) => {
      return new Promise(resolve => {
        papa.parse(rawFile, {
          complete: results => {
            resolve(results.data);
          }
        });
      });
    };
    let parsedData = await parseFile(rawFile);
    //console.log(parsedData[2]);
    
    for (let row = 1; row < parsedData.length -1; row++ ) { 
      console.log(row);
      knex('radicals')
        .insert({ 
          kanji: parsedData[row][0], 
          ranking: "x",
          kname: parsedData[row][1], 
          kstroke: parsedData[row][2], 
          kmeaning: parsedData[row][3], 
          kgrade: parsedData[row][4], 
          kunyomi_ja: parsedData[row][5], 
          kunyomi: parsedData[row][6], 
          onyomi_ja: parsedData[row][7], 
          onyomi: parsedData[row][8], 
          examples: parsedData[row][9], 
          radical: parsedData[row][10], 
          rad_order: parsedData[row][11], 
          rad_stroke: parsedData[row][12], 
          rad_name_ja: parsedData[row][13], 
          rad_name: parsedData[row][14], 
          rad_meaning: parsedData[row][15], 
          rad_position: parsedData[row][17],
        })
        .then(() => knex('radicals').select());
    };

    return parsedData;
  };

const kanji =  convertKanji(file);
kanji.then( (radicals) => {

    
  
  //console.log(result[4]);
  //do insert here

})


// backing services - AWS and so on, recognised by url 

//processes