import React from 'react';
import '../App.css';
//import Axios from 'axios';
import { get } from 'http';
//const { createApolloFetch } = require("apollo-fetch"); 
const axios = require("axios");

class ShowWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextWord: undefined,
      choiceMade: false,
    };
  }

  async componentDidMount() {
    // const fetch = createApolloFetch({
    //   uri: '/graphql'
    // })

  //   fetch({
  //     query: `query withRanking{
  //      ranking
  //      kname
  //    }
  //   }`
  // })


    // axios({
    //   url: '/graphql',
    //   method: `get`,
    //   data: {
    //     query: `query withRanking{
    //       //       id
    //       //      kanji
    //       //      ranking
    //       //      kname
    //       //      kmeaning
    //       //      kunyomi_ja
    //       //      kunyomi
    //       //      onyomi_ja
    //       //      onyomi
    //       //    }
    //       //   }`
    //   }
    // })
    // .then( (res) => {
    //   console.log(res.data);
    // })

    //console.log(this.props.allWords[2]);
    //this.setState({ nextWord: this.props.allWords[2] })
  }

  confidence = (e) => {
    this.props.confidenceChange(e);
    this.setState({choiceMade: true});
    
  } 

  showAnothertWord = () => {
    this.setState({choiceMade: false})
    this.showNextWord();
  }

  showNextWord = () => {
    //console.log(this.state.nextWord);
  
      
      
    return (
      <div>
      <div>
        {this.props.nextWord.kmeaning}
      </div>
          <select onChange={this.confidence} >
            <option value="0">"Confidence"</option>
            <option value="1">"0"</option>
            <option value="2">"1"</option>
            <option value="3">"2"</option>
            <option value="4">"3"</option>
          </select>
      </div>
    );
  }


  render() {
    return (
      <div>
      <div className="ShowWord" >
        {this.showNextWord(this.nextWord)}
      </div>
      {this.state.choiceMade? (
        <div>
          <div>
            {this.props.nextWord.kanji}
          </div>
          <div>
            {this.props.nextWord.kname}
          </div>
          <button onClick={this.showAnothertWord} >Next</button>
        </div>
      ) : (
        ""
      )
      }
      </div>
    );
    }
}

export default ShowWord;