### Japanese vocabulary flashcard app

This was created during my time as a student at [Code Chrysalis](https://www.codechrysalis.io/).


It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I want to continue to develop this app to deepen my knowledge and to create a useful tool for myself. 

<br>

The idea for the app started from my own personal need to customise the flashcards I use to learn Japanese vocabulary.
I want to have more complex ways of defining the confidence of knowing a specific word.
The goal is to make it an android app and use more advanced back-end.
At this moment, the looks priorities the main functionality and eyestrain.


<br>

This API was created using Postgres, GraphQL and Knex for the back end, with React on the front end.

It represents a detailed Japanese radica descrpiton from.

Each word has a detailed description from [Kanjialive] https://app.kanjialive.com/api/docs

The app is under development. I plan to update the visualisation and add more features, the algorithms of the order the flashcards come up at the screen.   

Working on this app allowed me to deepen my understanding of file structure, connection of modules, servers and proxies, databases, and asynchronous programming.

The front end will become interactive and fully functional.

<br>

### Set-up:

```

yarn install
yarn migrate
cd db
node seeding_data.js
yarn serve
yarn start

```

### How to use this API:

# Show all available kanji in the database in the databe:

```
{
  radicals{ 
    id
    kanji
    ranking
    kname
    kstroke
    kmeaning
    kgrade
    kunyomi_ja
    kunyomi
    onyomi_ja
    onyomi
    examples
    radical
    rad_order
    rad_stroke:
    rad_name_ja
    rad_name
    rad_meaning:
    rad_position_ja
    rad_position
  }
}
```


developed by: _baruishi_



## Available Scripts

In the project directory, you can run:

### `yarn serve`
### `yarn start`

yarn start - runs a GraphQL API server at localhost:3000/graphql<br />
yarn serve - runs the app in the development mode.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

