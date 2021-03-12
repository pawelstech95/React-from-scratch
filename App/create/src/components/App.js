import React, { Component } from 'react';
import './App.css';
// pseudo rosnaca baza danych - symuluje zewnetrzne dane
const data = [
  { id: 1, title: 'Wiadomość nr 1', body: 'Zawartość wiadomości nr 1...' },
  { id: 2, title: 'Wiadomość nr 2', body: 'Zawartość wiadomości nr 2...' },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartość wiadomości nr ${index}...`,
  });
  // console.log(data);
}, 4000);

class App extends Component {
  state = {
    // comments: data // tworzymy referencje a chcemy pobrać dane
    comments: [...data], // pobieramy i tworzymy kopię tablicy - pobieramy teraz dane od razu - state nnie jest miejscem zeby pobierac dane poczatkowe
  };
  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log('aktualizacja');
      this.setState({
        comments: [...data], // znowu pobieramy tablice ale ni ebudujemy referencji...pobieramy dane i budujemmy nowa tablice
      });
    } else {
      console.log('dane takie same, nie aktualizuje');
    }
  };
  componentDidMount() {
    this.idI = setInterval(this.getData, 3000); // metode clearinterval musi odwolac sie do id
  }
  componentWillUnmount() {
    clearInterval(this.idI);
  }
  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    console.log(comments);
    return <div className="App">{comments.reverse()}</div>; // funkcja reverse zmienia kolejność wyświetlania
  }
}
export default App;
