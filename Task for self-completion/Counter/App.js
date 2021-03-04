const Subtruction = (props) => (
  <button onClick={props.click} name={props.name}>
    Subtract -1
  </button>
);
const Addition = (props) => {
  return (
    <button onClick={props.click} name={props.name}>
      Add +1
    </button>
  );
};

class Counter extends React.Component {
  state = {
    value: 1,
    name: this.props.name,
  };
  handleSubClick = () => {
    {
      this.setState({
        name: this.state.name,
        value: this.state.value - 1,
      });
    }
  };
  handleAddClick = () => {
    {
      this.setState({
        name: this.state.name,
        value: this.state.value + 1,
      });
    }
  };
  render() {
    return (
      <>
        <Subtruction
          click={this.handleSubClick}
          name={(this.state.name = 'Sub')}
        />
        <Addition click={this.handleAddClick} name={this.state.name} />

        <div>Your score: {this.state.value}</div>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
