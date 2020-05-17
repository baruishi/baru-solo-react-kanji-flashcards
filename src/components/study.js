import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 230,
    maxWidth: 600,
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
  const finishButton = () => {
    console.log("Next button");
  }

  const con0 = () => {
    console.log("con0 button");
  }
  const con25 = () => {
    console.log("con25 button");
  }
  const con50 = () => {
    console.log("con50 button");
  }
  const con75 = () => {
    console.log("con75 button");
  }
  const con100 = () => {
    console.log("con100 button");
    console.log(kanji.examples);
  }
  const classes = useStyles();
  
  const [kanji, setKanji] = useState("");

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
      //setKanji(result.data.data.showFirstRadical[0]);
      console.log(temp);
      
      // setKanji({
      //   ...result.data.data.showFirstRadical[0],
      //   examples: JSON.parse(result.data.data.showFirstRadical[0].examples)
      // })
      setKanji(temp);
      //console.log(result.data.data.showFirstRadical[0])
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
            <Typography variant="h5" component="h2">
              {kanji.kanji}
            </Typography>
            <Typography variant="h5" component="h2">
              {kanji.kmeaning}
            </Typography>
            &nbsp;
            {/* {dynamic rendering} */}
            {kanji && kanji.examples.map( (example) => {
              return (
              <Typography variant="h5" component="h2">
                {example}
              </Typography>)
            })  }
            


            <Typography className={classes.pos} color="textSecondary">
              
            </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={con0}>con 0 </Button>
        <Button size="small" onClick={con25}>con 25 </Button>
        <Button size="small" onClick={con50}>con 50 </Button>
        <Button size="small" onClick={con75}>con 75 </Button>
        <Button size="small" onClick={con100}>con 100 </Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick={finishButton}>Finish </Button>
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

