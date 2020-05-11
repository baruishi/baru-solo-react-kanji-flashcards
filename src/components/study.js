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

const nextButton = () => {
  console.log("Next button");
}


const Study = () => {
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
      setKanji(result.data.data.showFirstRadical[0]);
      setKanji({
        ...result.data.data.showFirstRadical[0],
        examples: JSON.parse(result.data.data.showFirstRadical[0].examples)
      })
      console.log(kanji);
    }) 
    
    }, [])
  return (
    <div>
      study element
        <p>{kanji.kanji}</p> 
        <p>{kanji.kmeaning}</p>    
        <p>{kanji && kanji.examples[1]}</p>   
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
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={nextButton}>next </Button>
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
*/