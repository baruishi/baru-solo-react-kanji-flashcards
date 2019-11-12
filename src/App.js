import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './App.css';
import AddWord from "./components/AddWord";
import ShowWord from "./components/ShowWord";
//import Axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWords: [],
      word: null,
      japaneseWord: null,
      viewType: "initial"
    };
  }

  async componentDidMount() {
    // let newWord = await Axios.get("https://app.kanjialive.com/api/search/advanced?kem=parent", {crossdomain: true});

    // let newWord = await Axios.get("api/search/advanced?kem=parent", {crossdomain: true});
    // this.setState({word: newWord});
    
    // let japaneseWord = await Axios.get("api/search/advanced?kanji=親", {crossdomain: true});
    // this.setState({japaneseWord: japaneseWord});
    // console.log(this.state.word)
    // console.log(this.state.japaneseWord)
  }

  render() {
    return (
      <div className="app" >
        <h1>How to solve it?</h1>
        <div>
          <button>add word</button>
          <button>study</button>
          <button>settings</button>
        </div>
        
       <div className="flex">
          <div>
            <AddWord />
          </div>
          <div>
            <ShowWord />
          </div>
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
