### Japanese vocabulary flashcard app

This was created during my time as a student at [Code Chrysalis](https://www.codechrysalis.io/).


It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br>

The idea for that app started from my own personal need to customise the flashcards I use to learn Japanese vocabulary.


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

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

