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


const Search = () => {
  let englishWord = "";
  const classes = useStyles();
  const [kanji, setKanji] = useState({});
  const [localContext, setlocalContxt] = useState({
    apiResponse: false
    })

  const findKanji = (event) => {
    englishWord = event;
  }

  const searchApiCall = () => {
    console.log("searchApiCall");
    console.log(englishWord);
    Axios({
      url:'/graphql',
      method: 'post',
      data: {
        query: `
        {showByName(kmeaning: "${englishWord}") {
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
      console.log(result.data.data.showByName[0]);
      let temp = {
        ...result.data.data.showByName[0],
        examples: JSON.parse(result.data.data.showByName[0].examples)
      }
      setKanji(temp);
    })
    .then( () => {
      console.log(kanji);
      setlocalContxt({
        ...localContext,
        apiResponse: true
      })
    })

  }



  return (
    <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            </Typography>
            <Typography variant="h4" component="h2" align="center">
              Find Japanese word
            </Typography>
            <Typography variant="h4" component="h2" align="center">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="English word"
                //value={englishWord}
                onChange={e => findKanji(e.target.value)}
                />
              <button size="small" variant="contained" onClick={searchApiCall}>
                search
              </button>
            </Typography>
            {<Typography variant="h4" component="h2" align="center">
            {kanji.kmeaning}
            </Typography>}
            {localContext.apiResponse && (<Typography variant="h4" component="h2" align="center">
            {kanji.kanji}
            </Typography>)}
            {localContext.apiResponse && (<Typography variant="h4" component="h2" align="center">
            {kanji.onyomi}
            </Typography>)}
            {localContext.apiResponse && (<Typography variant="h4" component="h2" align="center">
            {kanji.onyomi_ja}
            </Typography>)}
            
            {/* {dynamic rendering} */}
            {localContext.apiResponse && kanji.examples.map( (example) => {
              return (
              <Typography  variant="h6" component="h2" align="center">
                {example}
              </Typography>)
            })  }
            
          </CardContent>

      {/* {!aswered && (<CardActions classes={{root: classes.root}} >
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
      </CardActions> */}
    </Card>    </div>
  );
}

export default Search