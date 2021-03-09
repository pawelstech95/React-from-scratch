const Subtruction = (props) => (
  <button onClick={props.click} >
    Subtract -1
  </button>
);
const Addition = (props) => {
  return (
    <button onClick={props.click}>
      Add +1
    </button>
  );
};

class Counter extends React.Component {
  state = {
    value: 1,
  };
  handleSubClick = () => {
    {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };
  handleAddClick = () => {
    {
      this.setState({
        value: this.state.value + 1,
      });
    }
  };
  render() {
    return (
      <>
        <Subtruction click={this.handleSubClick} />
        <Addition click={this.handleAddClick} />

        <div>Your score: {this.state.value}</div>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
