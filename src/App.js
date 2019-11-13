import React from 'react';
import './App.css';
//import AddWord from "./components/AddWord";
import ShowWord from "./components/ShowWord";
import { concat } from 'rxjs';
//import Axios from 'axios';


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
    
      },{
        "id": "63",
        "kanji": "鋼",
        "ranking": 0,
        "kname": "hagane",
        "kstroke": "16",
        "kmeaning": "steel",
        "kgrade": "6",
        "kunyomi_ja": "はがね",
        "kunyomi": "hagane",
      
      },
      {
        "id": "66",
        "kanji": "砂",
        "ranking": 0,
        "kname": "suna",
        "kstroke": "9",
        "kmeaning": "sand",
        "kgrade": "6",
        "kunyomi_ja": "すな",
        "kunyomi": "suna",
      
      },{
        "id": "115",
        "kanji": "糖",
        "ranking": 0,
        "kname": "(budou)tou",
        "kstroke": "16",
        "kmeaning": "sugar",
        "kgrade": "6",
        "kunyomi_ja": "",
        "kunyomi": "n/a",
       
      }, {
        "id": "105",
        "kanji": "暖",
        "ranking": 0,
        "kname": "dan-atata(maru)",
        "kstroke": "13",
        "kmeaning": "warm",
        "kgrade": "6",
        "kunyomi_ja": "あたた、あたたかい、あたたまる、あたためる",
        "kunyomi": "atata, atatakai, atatamaru, atatameru",
      
      },
      {
        "id": "49",
        "kanji": "危",
        "ranking": 0,
        "kname": "abu(nai)",
        "kstroke": "6",
        "kmeaning": "dangerous",
        "kgrade": "6",
        "kunyomi_ja": "あぶ、あや、あぶない、あやうい、あやぶむ、あやうく",
        "kunyomi": "abu, aya, abunai, ayaui, ayabumu, ayauku",
     
      },
      {
        "id": "80",
        "kanji": "開",
        "ranking": 0,
        "kname": "kai-hira(ku)",
        "kstroke": "12",
        "kmeaning": "open",
        "kgrade": "3",
        "kunyomi_ja": "ひら、ひらく、あ、あく、あける",
        "kunyomi": "hira, hiraku, a, aku, akeru",
       
      }, {
        "id": "136",
        "kanji": "紙",
        "ranking": 0,
        "kname": "shi-kami",
        "kstroke": "10",
        "kmeaning": "paper",
        "kgrade": "2",
        "kunyomi_ja": "かみ",
        "kunyomi": "kami",
     
      },
      {
        "id": "158",
        "kanji": "秋",
        "ranking": 0,
        "kname": "aki",
        "kstroke": "9",
        "kmeaning": "autumn",
        "kgrade": "2",
        "kunyomi_ja": "あき",
        "kunyomi": "aki",
      
      },
      {
        "id": "91",
        "kanji": "閉",
        "ranking": 0,
        "kname": "hei-toji(ru)",
        "kstroke": "11",
        "kmeaning": "close",
        "kgrade": "6",
        "kunyomi_ja": "と、とじる、とざす、し、しめる、しまる",
        "kunyomi": "to, tojiru, tozasu, shi, shimeru, shimaru",
      
      },{
        "id": "102",
        "kanji": "友",
        "ranking": 0,
        "kname": "yuu-tomo",
        "kstroke": "4",
        "kmeaning": "friend",
        "kgrade": "2",
        "kunyomi_ja": "とも",
        "kunyomi": "tomo",
     
      },{
        "id": "117",
        "kanji": "脳",
        "ranking": 0,
        "kname": "(zu)nou",
        "kstroke": "11",
        "kmeaning": "brain",
        "kgrade": "6",
        "kunyomi_ja": "",
        "kunyomi": "n/a",
    
      },{
        "id": "1094",
        "kanji": "池",
        "ranking": 0,
        "kname": "ike",
        "kstroke": "6",
        "kmeaning": "pond",
        "kgrade": "2",
        "kunyomi_ja": "いけ",
        "kunyomi": "ike",
    
      },{
        "id": "138",
        "kanji": "卵",
        "ranking": 0,
        "kname": "tamago",
        "kstroke": "7",
        "kmeaning": "egg",
        "kgrade": "6",
        "kunyomi_ja": "たまご",
        "kunyomi": "tamago",
   
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
