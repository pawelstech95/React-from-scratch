class Draw extends React.Component {
  state = {
    options: ['1', '2', '3'],
    option: null,
    value: '',
  };
  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    console.log(index);
    this.setState({
      option: this.state.options[index],
    });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleAddOption = () => {
    if (this.state.value === '') return alert('You have to write something!');
    const options = [...this.state.options];
    
    options.push(this.state.value);
    // ****
    // const options = this.state.options.concat(this.state.value)
    // ****
    this.setState({
      options,
      value: '',
    });

    // this.setState((prevState) => ({
    //   options: [...prevState.options, this.state.value],
    // }));

    alert(`Aktualne wróżby to ${options}`);
  };

  render() {
    return (
      <div className='app'>
        <button onClick={this.handleShowOption}>Zobacz wynik</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleAddOption}>Dodaj</button>
        <br />
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById('root'));
