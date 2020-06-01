import React, {useEffect, useState} from 'react';
import Axios from 'axios';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

let englishWord = ""

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
  ;
  const classes = useStyles();
  const [kanji, setKanji] = useState({});
  const [localContext, setlocalContxt] = useState({
    apiResponse: false
    })

  const findKanji = (event) => {
    englishWord = event;
  }

  const searchApiCall = () => {
    setlocalContxt({
      ...localContext,
      apiResponse: false
    })
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
      console.log(typeof result);
      console.log(result.data.data.showByName.length);

      if (result.data.data.showByName.length === 0) {
        setKanji("");
        } else {
        console.log(result.data.data.showByName[0]);
        let temp = {
          ...result.data.data.showByName[0],
          examples: JSON.parse(result.data.data.showByName[0].examples)
        }
      setKanji(temp);}
      return result;
    })
    .then( (result) => {
      console.log(kanji);
      console.log(result);
      if (result.data.data.showByName.length !== 0) {
      setlocalContxt({
        ...localContext,
        apiResponse: true
      })}
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
              <Input
                type="text"
                className={{root: classes.root}}
                size="medium"
                placeholder="English word"
                //value={englishWord}
                onChange={e => findKanji(e.target.value)}
                />
              <Button size="small" variant="contained" onClick={searchApiCall}>
                search
              </Button>
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

      
    </Card>    </div>
  );
}

export default Search

/*
Figure out what to do when no kanji object is returned. 

*/

