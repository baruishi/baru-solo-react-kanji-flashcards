const createDefaultKnexClient = () => {
  const Knex = require("knex");
  const config = require("./knexfile");

  return Knex({
    client: config.client,
    port: config.port,
    connection: {
      host: config.connection.host,
      port: config.connection.port,
      database: config.connection.database,
      user: config.connection.user,
      password: config.connection.password,
    },
  });
};

const createDbModels = (knex = createDefaultKnexClient()) => {
  return {
    quotes: require("./radicals")(knex),
  };
};

  // kanji: '飼',
  // kname: 'shi-ka(u)',
  // kstroke: '13',
  // kmeaning: 'raise animals',
  // kgrade: '5',
  // kunyomi_ja: 'か、かう',
  // kunyomi: 'ka, kau',
  // onyomi_ja: 'シ',
  // onyomi: 'shi',
  // examples: '[ [ "飼料（しりょう）", "fodder, feed" ], [ "飼育する（しいくする）", "breed, : raise, rear" ], [ "飼う（かう）", "keep as a pet" ], [ "飼い犬（かいいぬ）", "pet : dog" ], [ "羊飼い（ひつじかい）", "shepherd, shepherdess" ], [ "放し飼い（はなしが: い）", "pasturing, grazing" ] ]',
  // radical: '⻟',
  // rad_order: '221',
  // rad_stroke: '8',
  // rad_name_ja: 'しょくへん',
  // ad_name: 'shokuhen',
  // rad_meaning: 'food, to eat',
  // rad_position_ja: 'へん',
  // rad_position: 'hen'



//foreign - add a foreign key to a table
//index() - adds an index to a table over the given column. A default index name using the columns is used unless indexName is specified.

exports.down = function(knex) {
  return knex.schema.dropTable("radicals");
};

module.exports = {
  createDbModels,
};
