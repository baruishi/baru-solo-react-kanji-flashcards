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
    console.log("Next button");
  }

  const con0 = () => {
    console.log("con0 button");
    setConfidence(0);
    setAswer(true);
  }
  const con25 = () => {
    console.log("con25 button");
    setConfidence(1);
    setAswer(true);
  }
  const con50 = () => {
    console.log("con50 button");    
    setConfidence(2);
    setAswer(true);
  }
  const con75 = () => {
    console.log("con75 button");    
    setConfidence(3);
    setAswer(true);
  }
  const con100 = () => {
    console.log("con100 button");  
    setConfidence(4);  
    setAswer(true);
  }

  const wrongAnswer = () => {
    console.log("wrongAnswe button");
    kanjiID++;
    nextKanji("wrongAnswer");
    setAswer(false);
  }

  const correctAnswer = () => {
    console.log("correctAnswe button");
    kanjiID++;
    //console.log({kanjiID});
    nextKanji("correctAnswer");
    setAswer(false);
  }

  const nextKanji = (origin) => {
    console.log(`next kanji from ${origin} with kanjiID ${kanjiID}`);
    Axios({
      url:'/graphql',
      method: 'post',
      data: {
        query: `
        {showSpecificRadical(radicalId: "${kanjiID}") {
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
        }}
        `
      }
    })
    .then((result) => {
      console.log(result);
      let temp = {
        ...result.data.data.showSpecificRadical[0],
        examples: JSON.parse(result.data.data.showSpecificRadical[0].examples)
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
        {showFirstRadical {
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
        }}
        `
      }
    })
    .then((result) => {
      let temp = {
        ...result.data.data.showFirstRadical[0],
        examples: JSON.parse(result.data.data.showFirstRadical[0].examples)
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
            <Typography variant="h4" component="h2" align="center">
              {kanji.kmeaning}
            </Typography>
            <Typography variant="h3" component="h1" align="center">
              {aswered && kanji.kanji}
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

TODO: why string from 134 doesnt change into elements
*/

