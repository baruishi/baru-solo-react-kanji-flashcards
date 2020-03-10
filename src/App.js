import React from 'react';
import './App.css';
//import AddWord from "./components/AddWord";
import ShowWord from "./components/ShowWord";
import { concat } from 'rxjs';
import Axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWords: [ {
        "id": "33",
        "kanji": "綿",
        "ranking": 0,
        "kname": "men-wata",
        "kstroke": "14",
        "kmeaning": "cotton",
        "kgrade": "5",
        "kunyomi_ja": "わた",
        "kunyomi": "wata",
    
      }
    ],
      Nextword: {
        "id": "138",
        "kanji": "卵",
        "ranking": 0,
        "kname": "tamago",
        "kstroke": "7",
        "kmeaning": "egg",
        "kgrade": "6",
        "kunyomi_ja": "たまご",
        "kunyomi": "tamago",
        "onyomi_ja": "ラン",
        "onyomi": "ran",
        "radical": "⼙",
        "rad_order": "30",
        "rad_stroke": "ふしづくり",
        "rad_name": "fushizukuri",
        "rad_meaning": null,
        "rad_position": "tsukuri"
      },
      NextwordIndex: 0,
      viewType: "initial",
      wantToStudy: undefined,
    };
  }

  async componentDidMount() {
    Axios({
      url:'/graphql',
      method: 'post',
      data: {
        query: `
        {showFirstRadical {
          id
          kname
          onyomi_ja
          
        }}
        `
      }
    })
    .then((result) => console.log(result.data.data.showFirstRadical));

  }

  // selectWord = (e) => {
  //   const wordsArr = ["Add word", "cotton", "steel", "sand", "sugar", "warm", "dangerous", "open", "paper", "autumn", "close", "friend", "brain", "pond", "egg"];
  //   console.log(wordsArr[e.target.value]);

  // };

  study = () => {
    console.log("study button clicked");
    this.setState({wantToStudy: "study"});
  }
  
  lowestRanking = () => {
    console.log("entredfg");
    const rankings = [];
    this.state.allWords.map( (x) =>{
      if (typeof x === "number") {
      rankings.push(x.ranking)}
    });
    console.log("RANKNGS", rankings);
    const minimum = Math.min(rankings);
    let brake = 0;
    this.state.allWords.map( (x) =>{
      if (x.ranking === minimum && brake === 0) {
        brake++;
        this.setState({ Nextword: x});
        console.log(this.state.Nextword);
      }
    });
    console.log(JSON.stringify(rankings));
  }

  close = () => {
    console.log("close button clicked");
    this.setState({wantToStudy: undefined})
  }

  handleConfidenceChange = (e) => {
    const newRanking = this.state.NextwordIndex + e;
    //console.log(e.target.value);
    const index = this.state.NextwordIndex;
    this.state.allWords[index].ranking += e;
    this.lowestRanking();


  }

  render() {
    return (
      <div className="app" >
        <h1>Bar-anki</h1>
        <div>
          {/* <select onChange={this.selectWord} >
            <option value="0">"Add word"</option>
            <option value="1">"cotton"</option>
            <option value="2">"steel"</option>
            <option value="3">"sand"</option>
            <option value="4">"sugar"</option>
            <option value="5">"warm"</option>
            <option value="6">"dangerous"</option>
            <option value="7">"open"</option>
            <option value="8">"paper"</option>
            <option value="9">"autumn"</option>
            <option value="10">"close"</option>
            <option value="11">"friend"</option>
            <option value="12">"brain"</option>
            <option value="13">"pond"</option>
            <option value="14">"egg"</option>
          </select> */}
          <button onClick={this.study} >study</button>
          <button onClick={this.close} >close</button>
        </div>
        
       <div className="flex">
          {this.state.wantToStudy ? (
            <ShowWord nextWord={this.state.Nextword}
              confidenceChange={this.handleConfidenceChange}
            
            />
            ) : (
              ""

          )}
          
          
        </div>
      </div>
    );
  }
}


export default App;
