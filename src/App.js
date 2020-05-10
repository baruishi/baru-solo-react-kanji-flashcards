import React, {useEffect, useState} from 'react';
import './App.css';
//import AddWord from "./components/AddWord";
//import ShowWord from "./components/ShowWord";
import Axios from 'axios';


const App = () => {
  const [kanji, setKanji] = useState("");
  const [kanji2, setKanji2] = useState("");
  const study = () => {
    console.log("study button");
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
          //console.log(result.data.data.showFirstRadical[0]);
          setKanji(result.data.data.showFirstRadical[0]);
          //this.setState({currentWord: result.data.data.showFirstRadical[0]});
          //console.log("state", this.state.currentWord);
          console.log(kanji);
          //console.log(JSON.parse(result.data.data.showFirstRadical[0].examples));
          //kanji.examples =  JSON.parse(result.data.data.showFirstRadical[0].examples);
        })    
           
  }

  const again = () => {
    
    kanji.kmeaning = "new word";
    console.log(kanji);
  }

  useEffect( () => {
    console.log("Use effect - kanji");
    if (kanji === "") {return} 
    console.log(kanji.examples);
    //kanji.examples = JSON.parse(kanji.examples);
    console.log(kanji.examples)
    //kanji.examples = "fghfgh";
    console.log(kanji.examples)
    setKanji({
      ...kanji
    })
   
    
  }, [kanji])

  
    return (
      <div className="app" >
        <h1>Bar-anki</h1>
        <p>{kanji.kanji}</p> 
        <p>{kanji.kmeaning}</p>    
        <p>{kanji.examples}</p>   

        
        &nbsp;
        <button onClick={study}>
          study
        </button>
        <button onClickCapture={again}>
          {kanji.kmeaning}       
        </button>
        {/* {this.state.currentWord.id}<br/>
        {this.state.currentWord.kname} <br/>
        {this.state.currentWord.onyomi_ja} <br/>
 
        <div>
          
          <button onClick={this.study} >study</button>
          <button onClick={this.close} >close</button>
        </div> */}
{/*         
       <div className="flex">
          {this.state.wantToStudy ? (
            <ShowWord nextWord={this.state.Nextword}
              confidenceChange={this.handleConfidenceChange}
            
            />
            ) : (
              ""
          )}
        </div> */}
      </div>
    );
  
}


export default App;
