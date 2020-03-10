//control pannel for the app
const config = require("./config");

//database
const knex = require("knex")(config.db);

const express = require("express");

//graph iQL
const app = express();
const graphqlHTTP = require("express-graphql");

const { buildSchema } = require("graphql");
//const schema = require("./controllers");

const schema = buildSchema(`
  type radicals {
    id: ID!
    kanji: String!
    ranking: String
    kname: String!
    kstroke: String!
    kmeaning: String!
    kgrade: String!
    kunyomi_ja: String!
    kunyomi: String!
    onyomi_ja: String!
    onyomi: String!
    examples: String!
    radical: String!
    rad_order: String!
    rad_stroke: String!
    rad_name_ja: String!
    rad_name: String!
    rad_meaning: String!
    rad_position_ja: String
    rad_position: String
  }

  type oneRadical {
    id: ID!
    kanji: String
    ranking: String
    kname: String
    kstroke: String
    kmeaning: String
    kgrade: String
    kunyomi_ja: String
    kunyomi: String
    onyomi_ja: String
    onyomi: String
    examples: String
    radical: String
    rad_order: String
    rad_stroke: String
    rad_name_ja: String
    rad_name: String
    rad_meaning: String
    rad_position_ja: String
    rad_position: String
  }
    

  type Query {
    radicals: [radicals],
    withRanking: [radicals],
    showFirstRadical: [radicals]
    
  }
  type Mutation {
  updateRankingby(kmeaning: String!, ranking: String!): String!
  }
`);

const root = {
  radicals: () => {
    return knex
      .select("*")
      .from("radicals")
      .then(radicals => {
        return radicals;
      });
  },
  showFirstRadical: () => {
    radicalId = "1";
    return knex
      .select("*")
      .from("radicals")
      .where( {id: radicalId})
      .then(radicals => {
        return radicals;
      });
  },

  withRanking: () => {
    return knex
      .select("*")
      .from("radicals")
      .whereNot('ranking', "0")
      .then(radicals => {
        return radicals;
      });
  },


  updateRankingby: input => {
    const selectedRadical = input.kmeaning;
    const newRanking = input.ranking;
    return knex(`radicals`)
      .where({ kmeaning: selectedRadical })
      .update({ ranking: newRanking })
      .then(() => {
        return `${selectedRadical} updated to ${newRanking}`;
      });
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
