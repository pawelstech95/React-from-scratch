// console.log(React);
// console.log(ReactDOM);

// const element = <div>Pierwszy element React</div>;

// const element2 = React.createElement('div', null, 'Pierwszy element React');

// const element3 = (
//   <div>
//     <p id="main" className="red">Tekst</p>
//   </div>
// )

// const element4 = <div><p>Tekst</p></div>

// // Wersja skrócona React.Fragment (<>) nie zadziała dla wersji babel mniejszej niż 7.
// const element5 = (
//   <>
//     <section></section>
//     <section></section>
//   </>
// )

// *********************************************************
// ______________________________________________________________________
// ______________________________________________________________________

// const header = <h1 className="title">Witaj na stronie!</h1>;

// const classBig = 'big';
// const handleClick = () => alert('klik!');
// const main = (
//   <div>
//     <h1 onClick={handleClick} className="red">
//       Pierwszy artyluł na stronie
//     </h1>
//     <p>
//       Contrary to popular belief, Lorem Ipsum is not simply random text. It has
//       roots in a piece of classical Latin literature from 45 BC, making it over
//       2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
//       College in Virginia, looked up one of the more obscure Latin words,
//       consectetur, from a Lorem Ipsum passage, and going through the cites of
//       the word in classical literature, discovered the undoubtable source. Lorem
//       Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
//       Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
//       book is a treatise on the theory of ethics, very popular during the
//       Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
//       amet..", comes from a line in section 1.10.32.
//     </p>
//   </div>
// );
// const footer = (
//   <footer>
//     <p className={classBig}>Stopka</p>
//   </footer>
// );
// const app = [header, main, footer];

// ReactDOM.render(app, document.getElementById('root'));

// *****************************************
// ______________________________________________________________________
// ______________________________________________________________________

//komponent funkcyjny, bezstanowy

// const Header = () => {
//   return (
//     <div>
//       <h1>Witaj na stronie</h1>
//     </div>
//   );
// };

// //komponent klasowy, stanowy

// class Blog extends React.Component {
//   // state = {
//   //   number: 0,
//   // };
//   render() {
//     return (
//       <section>
//         <h2>Artykół</h2>
//         <p>
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It
//           has roots in a piece of classical Latin literature from 45 BC, making
//           it over 2000 years old. Richard McClintock, a Latin professor at
//           Hampden-Sydney College in Virginia, looked up one of the more obscure
//           Latin words, consectetur{' '}
//         </p>
//       </section>
//     );
//   }
// }
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Blog />
//     </>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________

// 11. Obiekty state i props na przykładzie listy zakupów

// class ShoppingList extends React.Component {
//   state = {
//     items1: 'ogórki',
//     items2: 'sok',
//     items3: 'cos do picia',
//   };

//   render() {
//     return (
//       <>
//         <h1>Lista zakupów</h1>
//         <ul>
//           <ItemList name={this.state.items1} example={2+2} />
//           <ItemList name={this.state.items2} />
//           <ItemList name={this.state.items3} />
//         </ul>
//       </>
//     );
//   }
// }

// class ItemList extends React.Component {
//   render() {
//     return (
//       <li>
//         {this.props.name} - {this.props.example}
//       </li>
//     );
//   }
// }

// ReactDOM.render(<ShoppingList />, document.getElementById('root'));

// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________

// 12. Mini-aplikacja "Add sign" dodająca znak do tekstu po kliknięciu przycisku - cz.1

class App extends React.Component {
  state = {
    text: '',
  };
  handleClick = () => {
    const letter = 'a';
    this.setState({
      text: this.state.text + letter,
    });
    // console.log(this.state.text);
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
