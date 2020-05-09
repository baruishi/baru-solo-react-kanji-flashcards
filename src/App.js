import React, {useEffect, useState} from 'react';
import './App.css';
//import AddWord from "./components/AddWord";
import ShowWord from "./components/ShowWord";
import { concat } from 'rxjs';
import Axios from 'axios';


const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentWord: {
  //       id: "",
  //       kname: "",
  //       onyomi_ja: "",
  //     }
  //   };
  // }

  // async componentDidMount() {
  //   Axios({
  //     url:'/graphql',
  //     method: 'post',
  //     data: {
  //       query: `
  //       {showFirstRadical {
  //         id
  //         kname
  //         onyomi_ja
  //       }}
  //       `
  //     }
  //   })
  //   .then((result) => {
  //     console.log(result.data.data.showFirstRadical);
  //     this.setState({currentWord: result.data.data.showFirstRadical[0]});
  //     console.log("state", this.state.currentWord);
  //   });
  // }


  // study = () => {
  //   console.log("study button clicked");
  //   console.log(this.state.currentWord);
  // }
  
  // lowestRanking = () => {
  //   console.log("entredfg");
  //   const rankings = [];
  //   this.state.allWords.map( (x) =>{
  //     if (typeof x === "number") {
  //     rankings.push(x.ranking)}
  //   });
  //   console.log("RANKNGS", rankings);
  //   const minimum = Math.min(rankings);
  //   let brake = 0;
  //   this.state.allWords.map( (x) =>{
  //     if (x.ranking === minimum && brake === 0) {
  //       brake++;
  //       this.setState({ Nextword: x});
  //       console.log(this.state.Nextword);
  //     }
  //   });
  //   console.log(JSON.stringify(rankings));
  // }

  // close = () => {
  //   console.log("close button clicked");
  //   console.log(this.state.currentWord);
  //   this.forceUpdate();
  // }

  // handleConfidenceChange = (e) => {
  //   const newRanking = this.state.NextwordIndex + e;
  //   //console.log(e.target.value);
  //   const index = this.state.NextwordIndex;
  //   this.state.allWords[index].ranking += e;
  //   this.lowestRanking();


  // }

  
    return (
      <div className="app" >
        <h1>Bar-anki</h1>
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
