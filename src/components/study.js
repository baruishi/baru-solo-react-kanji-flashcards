import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

let kanjiID = 10;


const useStyles = makeStyles({
  root: {
    minWidth: 230,
    maxWidth: 600,
    justifyContent: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const Study = () => {
  const classes = useStyles();
  const [kanji, setKanji] = useState("");
  const [aswered, setAswer] = useState(false);
  const [confidence, setConfidence] = useState(0);


  const finishButton = () => {
    console.log("Finish button");
  }

  const con0 = () => {
    console.log("con0 button");
    setConfidence(1);
    setAswer(true);
  }
  const con25 = () => {
    console.log("con25 button");
    setConfidence(2);
    setAswer(true);
  }
  const con50 = () => {
    console.log("con50 button");    
    setConfidence(3);
    setAswer(true);
  }
  const con75 = () => {
    console.log("con75 button");    
    setConfidence(4);
    setAswer(true);
  }
  const con100 = () => {
    console.log("con100 button");  
    setConfidence(5);  
    setAswer(true);
  }

  const wrongAnswer = () => {
    console.log("wrongAnswe button");
    kanjiID++;
    nextKanji("wrongAnswer");
    setAswer(false);
    updateRanking(1, kanji.id);

  }

  const correctAnswer = () => {
    console.log("correctAnswe button");
    kanjiID++;
    //console.log({kanjiID});
    nextKanji("correctAnswer");
    setAswer(false);
    updateRanking(confidence, kanji.id);
  }

  const updateRanking = (addedNumber, kanjiID) => {
    const newRanking = addedNumber + parseInt(kanji.ranking, 10);
    Axios({
      url: `graphql`,
      method: 'post',
      data: {
        query: `
        mutation {updateRankingById(radicalId: "${kanjiID}", ranking: "${newRanking}") 
        }`
      }
    })
    .then()
    .catch()
  }

  const nextKanji = (origin) => {
    console.log(`next kanji from ${origin} with kanjiID ${kanjiID}`);
    Axios({
      url:'/graphql',
      method: 'post',
      data: {
        query: `
        {minimumRanking {
          kanji
          kmeaning
          id
          onyomi
          kname
          onyomi_ja
          ranking
          examples
         }}
        `
      }
    })
    .then((result) => {
      console.log(result.data.data.minimumRanking);
      let temp = {
        ...result.data.data.minimumRanking,
        examples: JSON.parse(result.data.data.minimumRanking.examples)
      }
      console.log(temp);
      setKanji(temp);
    }) 
  }




  useEffect( () => {
    console.log("use eff")
    Axios({
      url:'/graphql',
      method: 'post',
      data: {
        query: `
        {minimumRanking {
          kanji
          kmeaning
          id
          onyomi
          kname
          onyomi_ja
          ranking
          examples
         }}
        `
      }
    })
    .then((result) => {
      console.log(result.data.data.minimumRanking);
      let temp = {
        ...result.data.data.minimumRanking,
        examples: JSON.parse(result.data.data.minimumRanking.examples)
      }
      console.log(temp);
      setKanji(temp);
    }) 
    
    }, [])

 
  


 

  return (
    <div>
      study element
        &nbsp;

        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            </Typography>
            <Typography variant="h3" component="h1" align="center">
              {kanji.kmeaning}
            </Typography>
            <Typography variant="h4" component="h2" align="center">
              {aswered && kanji.kanji}
            </Typography>
            <Typography variant="h4" component="h2" align="center">
              {aswered && kanji.id}
            </Typography>
            <Typography variant="h4" component="h2" align="center">
              {aswered && kanji.onyomi}
            </Typography>
         
            &nbsp;
            {/* {dynamic rendering} */}
            {aswered && kanji.examples.map( (example) => {
              return (
              <Typography  variant="h6" component="h2" align="center">
                {example}
              </Typography>)
            })  }
            


            <Typography className={classes.pos} color="textSecondary">
              
            </Typography>
        
      </CardContent>
      {!aswered && (<CardActions classes={{root: classes.root}} >
        <Button size="small" variant="contained" onClick={con0}>con 0 </Button>
        <Button size="small" variant="contained" onClick={con25}>con 25 </Button>
        <Button size="small" variant="contained" onClick={con50}>con 50 </Button>
        <Button size="small" variant="contained" onClick={con75}>con 75 </Button>
        <Button size="small" variant="contained" onClick={con100}>con 100 </Button>
      </CardActions>)}
      {aswered && (<CardActions classes={{root: classes.root}} >
        <Button size="medium" variant="contained" color="secondary" onClick={wrongAnswer}>wrong </Button>
        <Button size="medium" variant="contained" color="primary" onClick={correctAnswer}>correct </Button>        
      </CardActions>)}
      <CardActions classes={{root: classes.root}} >
        <Button size="medium" variant="contained" onClick={finishButton}>Finish </Button>
      </CardActions>
    </Card>


    </div>
  );
}

export default Study
/*
matrial ui
https://material-ui.com/components/cards/
simple card

FINISHED AT: only minimal ranking kanhi shows up and ranking is updated
NEXT: study/finish button usable. do not know yet what funcion it should serve. 
make new endpoint for searching by name. that will require handling errors if there is no such word.

TODO: 
*/

/*
{
  id: 5,
  kanji: '示',
  ranking: '0',
  kname: 'ji-shime(su)',
  kstroke: '5',
  kmeaning: 'show',
  kgrade: '5',
  kunyomi_ja: 'しめ、しめす',
  kunyomi: 'shime, shimesu',
  onyomi_ja: 'シ、ジ',
  onyomi: 'shi, ji',
  examples: '[ [ "示唆する（しさする）", "suggest, give a hint" ], [ "示談（じだん）", "settlement out of court" ], [ "掲示する（けいじする）", "put up a notice" ], [ "指示する（しじする）", "indicate, instruct, direct" ], [ "誇示する（こじする）", "emphasize, show off, display" ], [ "展示する（てんじする）", "exhibit, display [v.t.]" ], [ "表示する（ひょうじする）", "mark, display [v.t.]" ], [ "暗示する（あんじする）", "hint, suggest" ], [ "訓示する（くんじする）", "instruct, give instructions" ], [ "啓示する（けいじする）", "apocalypse, reveal" ], [ "示す（しめす）", "point out, indicate" ] ]',
  radical: '⽰',
  rad_order: '144',
  rad_stroke: '5',
  rad_name_ja: 'しめす',
  rad_name: 'shimesu',
  rad_meaning: 'altar, festival, religious service',
  rad_position_ja: null,
  rad_position: ''
}
*/

