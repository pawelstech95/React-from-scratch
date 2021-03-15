// import React from 'react';
// import './App.css';
// import Word from './Word';
//
//------------------
//       GET_DATA
//------------------

// class App extends React.Component {
//   state = {
//     // zadanie AJAX - asynchroniczne zadanie do serwera
//     words: [],
//     isLoaded: false,
//   };
//   componentDidMount() { // dobra miejsce na wczytanie danych po raz pierwszy
//     setTimeout(this.fetchData, 3000);
//   }
//   fetchData = () => {
//     fetch('data/words.json')
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           words: data.words,
//           isLoaded: true,
//         });
//       });
//   };
//   render() {
//     console.log('render');
//     const words = this.state.words.map((word) => (
//       <Word key={word.id} english={word.en} polish={word.pl} />
//     ));

//     return <ul>{this.state.isLoaded ? words : 'Wczyuję dane'}</ul>;
//   }
// }
//
//
// Projekt: Obiekt XMLHttpRequest
// ------------------------------
// ------------------------------

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    // tutaj powinnismy pobierac dane po pobieraja sie raz na starcie
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users);
        this.setState({
          users,
        });
      }
      // console.log(xhr.response);
    };
    xhr.send(null);
  }
  //
  //
  //    ALTERNATYWA DLA XHR.ONLOAD --- MOZEMY OBSŁUŻYĆ TUTAJ NP ERROR
  //
  //
  //  xhr.addEventListener('load', ()=>{console.log(xhr.status);
  // if (xhr.status === 200) {
  //   const users = JSON.parse(xhr.response);
  //   console.log(users);
  //   this.setState({
  //     users,
  //   });
  // }})
  //

  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.address.city}</p>
      </div>
    ));
    return <div>{users}</div>;
  }
}
export default App;
