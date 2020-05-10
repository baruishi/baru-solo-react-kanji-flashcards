import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const Study = () => {
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
    </div>
  );
}

export default Study