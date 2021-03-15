import React from 'react';
import './App.css';
import Word from './Word';

class App extends React.Component {
  state = {
    // zadanie AJAX - asynchroniczne zadanie do serwera
    words: [],
    isLoaded: false,
  };
  componentDidMount() { // dobra miejsce na wczytanie danych poraz pierwszy 
    setTimeout(this.fetchData, 3000);
  }
  fetchData = () => {
    fetch('data/words.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  };
  render() {
    console.log('render');
    const words = this.state.words.map((word) => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));

    return <ul>{this.state.isLoaded ? words : 'Wczyuję dane'}</ul>;
  }
}

export default App;
