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

const header = <h1 className="title">Witaj na stronie!</h1>;

const classBig = 'big';
const handleClick = () => alert('klik!');
const main = (
  <div>
    <h1 onClick={handleClick} className="red">
      Pierwszy artyluł na stronie
    </h1>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
    </p>
  </div>
);
const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
);
const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'));
