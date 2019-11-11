import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './App.css';
import Canvas from "./components/Canvas";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <h1>How to solve it?</h1>
        <div>
          Write your number:
        </div>
       <div>
         <Canvas />
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
