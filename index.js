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
    showFirstRadical: [radicals],
    showSpecificRadical(radicalId: String!): [radicals],
    minimumRanking: oneRadical
    
  }
  type Mutation {
    updateRankingById(radicalId: String!, ranking: String!): String!
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
  showSpecificRadical: (input) => {    
    radicalId = `${input.radicalId}`;
    return knex
      .select("*")
      .from("radicals")
      .where( {id: radicalId})
      .then(radicals => {
        return radicals;
      });
  },
  minimumRanking: () => {
    //returns first kanji with minimum ranking
    let minimumRanking;

    async function asyncCall() {
      minimumRanking = await knex("radicals")
        .select("*")
        .then(radicals => {
          let rankingArr = []
          radicals.map((obj) => {
            rankingArr.push(obj.ranking);
          })
          return Math.min(...rankingArr);
        });
      minimumRanking = minimumRanking.toString();
      return minimumRanking;
    }
    
    return asyncCall().then( (result) => {
        return knex
        .select("*")
        .from("radicals")
        .where( {ranking: result})
        .then(radicals => {
          return radicals[0];
        });
    });
  },
  updateRankingById: (input) => {
    const selectedKanji = input.radicalId;
    const newRanking = input.ranking;
    //console.log({selectedKanji, newRanking});
    return knex(`radicals`)
      .select("*")
      .from("radicals")
      .where({ id: selectedKanji })
      .update({ ranking: newRanking })
      // .then(() => {
      //   return `${selectedKanji} updated to ${newRanking}`;
      // });
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
