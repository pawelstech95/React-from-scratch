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

// komponent funkcyjny, bezstanowy

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

// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageIsActive: false,
//       // buttonValue: 'Pokaż'
//     };
//     this.handleButtonChange = this.handleButtonChange.bind(this);
//   }
//   handleButtonChange() {
//     // console.log('sss');
//     this.setState({
//       messageIsActive: !this.state.messageIsActive,
//     });
//   }
//   render() {
//     const text =
//       ' Lorem*100sdf kjsdf jojfs isoh sh dkj hklhds  lsdf kdfgk sfkd kds gfsdkf ds fksd fkd  dkffks fdksd fkshdsfks fksdsd dslkhs leytsygjhsgfkyt  hagf a glaL L GL l l lsdlghsd lg lsfdgdhgjsdflghs lkjhglkshglsh';
//     return (
//       <>
//         <button onClick={this.handleButtonChange} type="text">
//           {this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}
//         </button>
//         {/* <p>{this.state.messageIsActive && text}</p> */}
//         {this.state.messageIsActive ? <p>{text}</p> : null}
//       </>
//     );
//   }
// }

// ReactDOM.render(<Message />, document.getElementById('root'));

// 19. Zliczanie kliknięć i wyświetlanie wyniku, cz. 1: przepływ danych w React

// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________

// class Counter extends React.Component {
//   state = {
//     count: 0,
//     result: this.props.result,
//   };
//   // this.handleMathClick = this.handleMathClick.bind(this);
//   handleMathClick = (type, number = 1) => {
//     // debugger
//     if (type === 'subtraction') {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//         result: prevState.result - number,
//       }));
//     } else if (type === 'reset') {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//         result: 0,
//       }));
//     } else if (type === 'addition') {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//         result: prevState.result + number,
//       }));
//     }
//   };
//   render() {
//     return (
//       <>
//         {/* <button
//           type=""
//           onClick={this.handleMathClick.bind(this, 'subtraction', 1)}
//         >
//           -1
//         </button>
//         {/* ---------------------- */}
//         {/* <button onClick={() => this.handleMathClick('subtraction' , 1)} type="">-1</button> */}
//         {/* -------------------------------------------------------------------------- */}
//         {/* w tym przypadku bind wywoluje nam this ale tez mozemy uzyc argumentow type i number poniewaz
//          **************  bind(this, type, number /poniewaz w handleMathclick podalismy dwa argumenty) ************** */}
//         {/* -------------------------------------------------------------------------------------------- */}
//         {/* ------------------------------ */}
//         {/* <button onClick={this.handleMathClick.bind(this, 'reset')} type="">
//           Reset
//         </button>
//         <button
//           type=""
//           onClick={this.handleMathClick.bind(this, 'addition', 1)}
//         >
//           +1
//         </button> */}

//         <MathButton
//           name="-1"
//           number="1"
//           type="subtraction"
//           click={this.handleMathClick}
//         />
//         <MathButton
//           name="reset"
//           // number="0"
//           type="reset"
//           click={this.handleMathClick}
//         />
//         <MathButton
//           name="+1"
//           number="1"
//           type="addition"
//           click={this.handleMathClick}
//         />
//         <ResultPannel count={this.state.count} result={this.state.result} />
//       </>
//     );
//   }
// }

// const MathButton = (props) => {
//   const number = parseInt(props.number);
//   // console.log(props);
//   return (
//     <button onClick={() => props.click(props.type, number)}>
//       {props.name}
//     </button>
//   );
// };

// const ResultPannel = (props) => {
//   return (
//     <>
//       <h1>
//         Liczba kliknięć: {props.count} {props.count > 10 ? <span>Przekroczyłeś limit : 10</span> : null}
//       </h1>
//       <h1>Wynik: {props.result}</h1>
//     </>
//   );
// };

// const startValue = 0;
// ReactDOM.render(
//   <Counter result={startValue} />,
//   document.getElementById('root')
// );

// ________________________________________________________________
// ________________________________________________________________

// PROPSY MAJA WARTOŚCI DOMYSLNE

// static defaultProps {

// }

// ________________________________________________________________
// ________________________________________________________________

// 30. Projekt 1: checkbox, cz. 1 - wiadomość w zależności od zaznaczenia checkboxa
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________

// const displayMessage = (isConfirmed, isFormSubmited) => {
//   if (isFormSubmited) {
//     if (isConfirmed) {
//       return <ValidationMessage txt="Możesz obejrzeć film. zapraszamy!" />;
//     } else {
//       return (
//         <ValidationMessage txt="Nie możesz obejrzeć filmu jeżeli nie masz ukończonych 16 lat!" />
//       );
//     }
//   } else {
//     return null;
//   }
// };

// const ValidationMessage = (props) => {
//   const { txt } = props;
//   return <p>{txt}</p>;
// };
// // Propsy przekazujemy z miejsca wywolania a strukture ustalamy w deklaracji

// const OrderForm = (props) => {
//   const {submit, isConfirmed, change} = props
//   return (
//     <form onSubmit={submit}>
//       <input
//         type="checkbox"
//         id="age"
//         onChange={change}
//         checked={isConfirmed}
//       />
//       <label htmlFor="age">Mam co najmniej 16 lat</label>
//       <br />
//       <button type="submit">Kup bilet</button>
//     </form>
//   );
// };
// class TicketShop extends React.Component {
//   state = {
//     isConfirmed: false,
//     isFormSubmited: false,
//   };
//   handleCheckboxChange = () => {
//     this.setState({
//       isConfirmed: !this.state.isConfirmed,
//       isFormSubmited: false,
//     });
//   };
//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!this.state.isFormSubmited) {
//       // musimy pobrac stan aktualny
//       this.setState({
//         isFormSubmited: true, //nie robimy !.t.s.isForm... ponieważ to nam bedzie przeładowywać cały czas
//       });
//     }
//   };
//   displayMessage = () => {
//     if (this.state.isFormSubmited) {
//       if (this.state.isConfirmed) {
//         return <ValidationMessage txt="Możesz obejrzeć film. zapraszamy!" />;
//       } else {
//         return (
//           <ValidationMessage txt="Nie możesz obejrzeć filmu jeżeli nie masz ukończonych 16 lat!" />
//         );
//       }
//     } else {
//       return null;
//     }
//   };

//   render() {
//     const { isConfirmed, isFormSubmited } = this.state;
//     // console.log(isConfirmed);
//     return (
//       <>
//         <h1>Kup bilet na horror roku!</h1>
//         <OrderForm
//           change={this.handleCheckboxChange}
//           submit={this.handleFormSubmit}
//           checked={isConfirmed}
//         />

//         {this.displayMessage()}
//       </>
//     );
//   }
// }
// ReactDOM.render(<TicketShop />, document.getElementById('root'));

// Projekt 2: koszyk, cz. 1 - struktura i logika aplikacji
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________

// class App extends React.Component {
//   state = {
//     availableProducts: 7,
//     shoppingCart: 5,
//   };

//   handleRemoveFromCart = () => {
//     console.log('cl');
//     this.setState({
//       shoppingCart: this.state.shoppingCart - 1,
//     });
//   };
//   handleAddToCart = () => {
//     if (this.state.shoppingCart < this.state.availableProducts) {
//       this.setState({
//         shoppingCart: this.state.shoppingCart + 1,
//       });
//     } else {
//       return console.log('sdsd');
//     }
//   };
//   handleBuy = () => {
//     console.log('22');
//     this.setState({
//       availableProducts: this.state.availableProducts - this.state.shoppingCart,
//       shoppingCart: 0,
//     });
//   };

//   render() {
//     const { shoppingCart, availableProducts } = this.state;
//     const style =
//       shoppingCart === 0
//         ? {
//             opacity: 0.3,
//           }
//         : {};
//     return (
//       <>
//         <button
//           disabled={shoppingCart ? false : true}
//           onClick={this.handleRemoveFromCart}
//         >
//           {' '}
//           -{' '}
//         </button>

//         <span style={style}>{shoppingCart}</span>

//         <button
//           disabled={shoppingCart === availableProducts ? true : false}
//           onClick={this.handleAddToCart}
//         >
//           {' '}
//           +{' '}
//         </button>
//         {shoppingCart > 0 && <button onClick={this.handleBuy}> Kup </button>}
//       </>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// 38. Projekt 3: praca z tablicami, cz. 1: wyświetlanie elementów tablicy jako listy
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________
// const data = {
//   users: [
//     {
//       id: 1,
//       age: 29,
//       name: 'Arek',
//       sex: 'male',
//     },
//     {
//       id: 2,
//       age: 19,
//       name: 'Marek',
//       sex: 'male',
//     },
//     {
//       id: 3,
//       age: 39,
//       name: 'Marta',
//       sex: 'female',
//     },
//   ],
// };

// const Item = ({ user }) => (
//   <div className="userInfo">
//     <h1>Użytkownik {user.name}</h1>
//     <p>Informacje o użytkowniku: </p>
//     <p>
//       Wiek Użytkownika: <strong>{user.age}</strong>
//     </p>
//     <p>Płeć użytkownika: {user.sex}</p>
//   </div>
// );
// class ListItems extends React.Component {
//   state = {
//     select: 'all',
//   };
//   handleUsersFilter = (option) => {
//     this.setState({
//       select: option,
//     });
//     console.log(option);
//   };
//   usersList = () => {
//     // debugger
//     let users = this.props.data.users;
//     switch (this.state.select) {
//       case 'all':
//         return users.map((user) => <Item user={user} key={user.id} />);
//       case 'female':
//         users = users.filter((user) => user.sex === 'female');
//         return users.map((user) => <Item user={user} key={user.id} />);
//       case 'male':
//         users = users.filter((user) => user.sex === 'male');
//         return users.map((user) => <Item user={user} key={user.id} />);
//       default:
//         return ' Brak danych';
//     }
//   };
//   render() {
//     // let users = this.props.data.users;
//     // users = users.filter((user) => user.sex === 'female');
//     // const Items = users.map((user) => <Item key={user.id} user={user} />);
//     // return <>{Items}</>;

//     return (
//       <div>
//         <button onClick={this.handleUsersFilter.bind(this, 'all')}>
//           Wszyscy
//         </button>
//         <button onClick={this.handleUsersFilter.bind(this, 'female')}>
//           Kobiety
//         </button>
//         <button onClick={this.handleUsersFilter.bind(this, 'male')}>
//           Mężczyźni
//         </button>
//         {this.usersList()}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));

// 43. Projekt 4: interaktywne menu restauracji, cz. 1 - struktura aplikacji
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________

// class App extends React.Component {
//   state = {
//     items: [
//       { id: 1, name: 'herbata', active: true },
//       { id: 2, name: 'ziemniaki', active: false },
//       { id: 3, name: 'kasza', active: false },
//       { id: 4, name: 'zupa wodna', active: true },
//       { id: 5, name: 'wrzątek', active: false },
//       { id: 6, name: 'chleb', active: false },
//     ],
//   };
//   handleChangeStatus = (id) => {
//     // console.log(id);

//     const items = this.state.items.map((item) => {
//       if (id === item.id) {
//         item.active = !item.active;
//       }
//       return item;
//     });
//     this.setState({
//       // items: items,
//       items
//     });
//   };

//   render() {
//     return (
//       <>
//         <Header items={this.state.items} />
//         <ListItems
//           items={this.state.items}
//           changeStatus={this.handleChangeStatus}
//         />
//       </>
//     );
//   }
// }
//  //Checkout

// class Form extends React.Component {
//   state = {
//     city: 'Londyn',
//     text: '',
//     isLoved: true,
//     number: '0',
//   };
// handleCityChange = (e) => {
//   this.setState({
//     city: e.target.value,
//   });
// };
// handleTextChange = (e) => {
//   this.setState({
//     text: e.target.value,
//   });
// };
// handleIsLovedChange = (e) => {
//   this.setState({
//     isLoved: e.target.checked,
//   });
// };
// handleVisitsNumberChange = (e) => {
//   this.setState({
//     number: e.target.value,
//   });
// };
//   handleChange = (e) => {
//     console.log(e.target.type);
//     if (e.target.type === 'checkbox') {
//       this.setState({
//         [e.target.name]: e.target.checked,
//       });
//     } else
//       this.setState({
//         [e.target.name]: e.target.value,
//       });
//   };
//   render() {
//     return (
//       <div>
//         <label>
//           Podaj miasto{' '}
//           <input
//             name="city"
//             value={this.state.city}
//             onChange={this.handleChange}
//             type="text"
//           />
//         </label>
//         <br />
//         <label>
//           Napisz coś o mieście
//           <textarea
//             name="text"
//             value={this.state.text}
//             onChange={this.handleChange}
//           ></textarea>
//         </label>
//         <br />
//         <label>
//           {' '}
//           Czy lubisz to miasto?
//           <input
//             name="isLoved"
//             type="checkbox"
//             checked={this.state.isLoved}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Ile razy byliście w tym mieście?
//           <select
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//           >
//             <option value="0">0</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5 > more">5 i wiecej</option>
//           </select>
//         </label>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Form />, document.getElementById('root'));

// const Dollars = (props) => (
//   <div>
//     Wartość w dolarach:{' '}
//     {props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)}
//   </div>
// );

// const Euros = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return <div>Wartość w euro: {props.cash <= 0 ? '' : value}</div>;
// };

// const Cash = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return <div>Wartość w euro: {props.cash <= 0 ? '' : value}</div>;
// };

// class ExchangeCounter extends React.Component {
//   state = {
//     amount: '',
//     // ratioDollar: 3.6,
//     // ratioEuro: 4.2,
//   };
//   currencies = [
//     { id: 1, name: 'dollar', ratio: 3.6, title: 'Wartość w dolarach: ' },
//     { id: 2, name: 'euro', ratio: 4.1, title: 'Wartość w euro: ' },
//     { id: 3, name: 'pound', ratio: 4.6, title: 'Wartość w funtach: ' },
//   ];

//   handleChange = (e) => {
//     this.setState({
//       amount: e.target.value,
//     });
//   };
//   render() {
//     const { amount } = this.state;
//     const calculators = this.currencies.map((currency) => (
//       <Cash
//         key={currency.id}
//         cash={amount}
//         ratio={currency.ratio}
//         title={currency.title}
//       />
//     ));
//     return (
//       <div className="app">
//         <label>
//           <input
//             type="number"
//             name=""
//             value={amount}
//             onChange={this.handleChange}
//           />
//         </label>
//         {calculators}
//         {/* <Dollars cash={amount} ratio={ratioDollar} />
//         <Euros cash={amount} ratio={ratioEuro} /> */}
//         {/* <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
//         <Cash cash={amount} ratio={ratioEuro} title="Wartość w Euro: " /> */}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));

// 62. Lifecycle w kodzie
// ________________________________________________________________
// ________________________________________________________________
// ________________________________________________________________

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log('Wywołać metodę constructor');
  }
  componentWillMount() {
    console.log('wywołana componentWillMount');
  }
  componentDidMount() {
    console.log('Wywołana componentDidMount');
    this.setState({
      number: 1,
    });
  }
  componentDidUpdate() {
    console.log('Wywołana componentDidUpdate');
  }
  render() {
    console.log('Wywołana metoda render');
    return (
      <>
        <p>lifecycle - montowanie komponentu</p>
        <Child />
      </>
    );
  }
}
class Child extends React.Component {
  componentDidMount() {
    console.log('Wywołana componentDidMount w komponencie Child');
    // this.setState({

    // })
  }
  render() {
    console.log('--------------- Wywołana metoda render w komponencie Child');
    return <p>Dziecko</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
