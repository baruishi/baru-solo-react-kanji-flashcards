exports.up = function(knex, Promise) {
  return knex.schema.createTable("radicals", (table) => {
    table.increments("id").index();
      table.string("kanji");
      table.string("ranking");
      table.string("kname");
      table.string("kstroke");
      table.string("kmeaning");
      table.string("kgrade");
      table.string("kunyomi_ja");
      table.text("kunyomi");
      table.text("onyomi_ja");
      table.text("onyomi");
      table.text("examples");
      table.text("radical");
      table.text("rad_order");
      table.string("rad_stroke");
      table.string("rad_name_ja");
      table.string("rad_name");
      table.string("rad_meaning");
      table.string("rad_position_ja");
      table.string("rad_position");
  });
};

//foreign - add a foreign key to a table
//index() - adds an index to a table over the given column. A default index name using the columns is used unless indexName is specified.

exports.down = function(knex) {
  return knex.schema.dropTable("radicals");
};
