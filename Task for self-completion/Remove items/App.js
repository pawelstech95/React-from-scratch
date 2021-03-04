const User = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Remove</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    users: [
      { id: 1, name: 'Jan' },
      { id: 2, name: 'Marek' },
      { id: 3, name: 'Anna' },
    ],
    value: '',
  };
  handleRemoveButton(id) {
    // JEZELI ROBIMY BIND TO MUSIMY PRZEKAZAĆ ID

    const newArray = [...this.state.users]; // Mogłem nazwać users to wtedy w setState ({users: users }) === ({ users })
    const index = newArray.findIndex((user) => user.id === id); // WAŻNE
    console.log(index);
    if (index !== -1) {
      newArray.splice(index, 1);
      this.setState({ users: newArray });
    }
  }

  //  ZAMIAST METODY SPLICE MOZEMY UZYC PONIZSZYCH
  //
  //
  //    let users = Array.from(this.state.people);
  //    let users = this.state.users.slice()
  //
  //
  // ZAMIAST IF !== -1    --->
  //
  //
  // users = users.filter(user => id !== user.id)

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    const users = this.state.users.map((user) => (
      <User
        name={user.name}
        id={user.id}
        key={user.id}
        delete={this.handleRemoveButton.bind(this, user.id)}
      />
    ));

    return (
      <>
        <ul>{users}</ul>
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('root'));
