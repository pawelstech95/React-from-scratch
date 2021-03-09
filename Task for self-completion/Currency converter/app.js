const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? '' : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: '',
    product: 'electricity',
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };
  static defaultProps = {
    currencies: [
      { id: 0, name: 'zloty', ratio: 1, title: 'Wartość w złotówkach: ' },
      { id: 1, name: 'dollar', ratio: 3.6, title: 'Wartość w dolarach: ' },
      { id: 2, name: 'euro', ratio: 4.1, title: 'Wartość w euro: ' },
      { id: 3, name: 'pound', ratio: 4.6, title: 'Wartość w funtach: ' },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    },
  };
  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: '',
    });
  };
  insertSuffix(select) {
    if (select === 'electricity') return <em>kWh</em>;
    else if (select === 'gas') return <em>l</em>;
    else if (select === 'oranges') return <em>kg</em>;
    else return null;
  }
  selectPrice(select) {
    const price = this.props.prices[select];
    return price;
  }
  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);
    const calculators = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        cash={amount}
        ratio={currency.ratio}
        title={currency.title}
        price={price}
      />
    ));
    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">Prąd</option>
            <option value="gas">Benzyna</option>
            <option value="oranges">Pomarańcze</option>
          </select>
        </label>
        <label>
          <input
            type="number"
            name=""
            value={amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
        {/* <Dollars cash={amount} ratio={ratioDollar} />
        <Euros cash={amount} ratio={ratioEuro} /> */}
        {/* <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
        <Cash cash={amount} ratio={ratioEuro} title="Wartość w Euro: " /> */}
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));
