import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current_game: ''};

    this.handleGameSelect = this.handleGameSelect.bind(this);
  }

  handleGameSelect(event) {
    this.setState({current_game: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
      <h1 align="center"> Welcome to Raja's Game Room </h1>
      <Button variant="primary" size="lg" block onClick={this.handleGameSelect} value="donkey"> Donkey </Button>
      <Button variant="secondary" size="lg" block onClick={this.handleGameSelect} value="uno"> Uno </Button>
      </React.Fragment>
      
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);