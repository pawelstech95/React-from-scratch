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

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   // state = {
//   //   text: '',
//   // };
//   // handleClick = () => {
//   handleClick() {

//     const number = Math.floor(Math.random() * 10)
//     // const letter = 'a';
//     // this.setState({
//     //   text: this.state.text + letter,
//     // });
//     // console.log(this.state.text);
//     this.setState(() => ({
//       // text: this.state.text + letter,
//       text: this.state.text + number,
//     }));
//   }
//   render() {

//     return (
//       <>
//         <button onClick={this.handleClick}>{this.props.btnTitle}</button>
//         <PanelResult text={this.state.text} />
//       </>
//       // Props przekazujemy - ponizej props = powyzej
//     );
//   }
// }

// const PanelResult = (props) => {
//   return <h1>{props.text}</h1>;
// };

// ReactDOM.render(<App  btnTitle='Dodaj Cyfre'/>, document.getElementById('root'));

// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________

// 15. Tekst pojawiający się po wpisaniu w input – cz. 1

// class App extends React.Component {
//   state = {
//     value: '',
//   };
//   handleInputChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       value: e.target.value,
//     });
//   };
//   handleResetClick = () => {
//     this.setState({
//       value: '',
//     });
//   };
//   render() {
//     return (
//       <>
//         <input
//           value={this.state.value}
//           onChange={this.handleInputChange}
//           type="text"
//         ></input>
//         <button onClick={this.handleResetClick}>RESET</button>
//         <h1 className="title">{this.state.value.toUpperCase()}</h1>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________

// 17. Przycisk pokaż/ukryj - cz. 1

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
      // buttonValue: 'Pokaż'
    };
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }
  handleButtonChange() {
    // console.log('sss');
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }
  render() {
    const text =
      ' Lorem*100sdf kjsdf jojfs isoh sh dkj hklhds  lsdf kdfgk sfkd kds gfsdkf ds fksd fkd  dkffks fdksd fkshdsfks fksdsd dslkhs leytsygjhsgfkyt  hagf a glaL L GL l l lsdlghsd lg lsfdgdhgjsdflghs lkjhglkshglsh';
    return (
      <>
        <button onClick={this.handleButtonChange} type="text">
          {this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}
        </button>
        {/* <p>{this.state.messageIsActive && text}</p> */}
        {this.state.messageIsActive ? <p>{text}</p> : null}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById('root'));
