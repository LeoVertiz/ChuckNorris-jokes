import React from 'react';
import axios from 'axios';
import './App.css';
import JokeCard from './components/JokeCard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: []
    }
    this.NUMBER_OF_JOKES = 16;
    this.NUMBER_OF_COLS = 4;
  }

  async componentDidMount() {
    let jokes = [];
    for(let i = 0; i < this.NUMBER_OF_JOKES; i++) {
      await axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
          let joke = res.data;
          jokes.push(joke);
        });
    }
    jokes.forEach((joke, i) => {
      let jokeJsx = <JokeCard joke={joke} key={i}/>
      let numCol = i%this.NUMBER_OF_COLS;
      let col = this.state.cols[numCol] ? this.state.cols[numCol] : [];
      col.push(jokeJsx);
      let cols = this.state.cols;
      cols[numCol] = col;
      this.setState({...cols});
    })
  }

  getJsxCols = () => {
    let colsJsx = [];
    for(let i = 0; i < this.NUMBER_OF_COLS; i++){
      colsJsx.push(
        React.createElement("div", {className: "col", key: i}, this.state.cols[i])
      );
    }
    return React.createElement("div", {className: "row"}, colsJsx);
  }

  loading = () => (
    <div className="loading"></div>
  )

  render(){
    return (
      <div className="App">
        <h1 className="text-center">Chucknorris Random Jokes</h1>
        {this.state.cols.length ? this.getJsxCols() : this.loading() }
      </div>
    );
  }
}
