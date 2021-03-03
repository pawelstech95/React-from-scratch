
class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'herbata', active: true },
      { id: 2, name: 'ziemniaki', active: false },
      { id: 3, name: 'kasza', active: false },
      { id: 4, name: 'zupa wodna', active: true },
      { id: 5, name: 'wrzątek', active: false },
      { id: 6, name: 'chleb', active: false },
    ],
  };
  handleChangeStatus = (id) => {
    // console.log(id);

    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      // items: items,
      items
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}
 //Checkout

class Form extends React.Component {
  state = {
    city: 'Londyn',
    text: '',
    isLoved: true,
    number: '0',
  };
handleCityChange = (e) => {
  this.setState({
    city: e.target.value,
  });
};
handleTextChange = (e) => {
  this.setState({
    text: e.target.value,
  });
};
handleIsLovedChange = (e) => {
  this.setState({
    isLoved: e.target.checked,
  });
};
handleVisitsNumberChange = (e) => {
  this.setState({
    number: e.target.value,
  });
};
  handleChange = (e) => {
    console.log(e.target.type);
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  render() {
    return (
      <div>
        <label>
          Podaj miasto{' '}
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o mieście
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          {' '}
          Czy lubisz to miasto?
          <input
            name="isLoved"
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5 > more">5 i wiecej</option>
          </select>
        </label>
      </div>
    );
  }
}
ReactDOM.render(<Form />, document.getElementById('root'));

const Dollars = (props) => (
  <div>
    Wartość w dolarach:{' '}
    {props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)}
  </div>
);

const Euros = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return <div>Wartość w euro: {props.cash <= 0 ? '' : value}</div>;
};
