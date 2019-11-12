import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './App.css';
//import AddWord from "./components/AddWord";
import ShowWord from "./components/ShowWord";
//import Axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWords: [],
      word: null,
      japaneseWord: null,
      viewType: "initial",
      wantToStudy: undefined,
    };
  }

  async componentDidMount() {
  }

  selectWord = (e) => {
    const wordsArr = ["Add word", "cotton", "steel", "sand", "sugar", "warm", "dangerous", "open", "paper", "autumn", "close", "friend", "brain", "pond", "egg"];
    console.log(wordsArr[e.target.value]);
  };

  study = () => {
    console.log("study button clicked");
    (this.state.wantToStudy) ? 
    this.setState({wantToStudy: undefined})
    : this.setState({wantToStudy: "study"});
  }

  render() {
    return (
      <div className="app" >
        <h1>How to solve it?</h1>
        <div>
          <select onChange={this.selectWord} >
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
          </select>
          <button onClick={this.study} >study</button>
        </div>
        
       <div className="flex">
          {this.state.wantToStudy ? (
            ""
          ) : (
            <ShowWord />

          )}
          
          
        </div>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
