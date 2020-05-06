import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_game: '', game_selected: false };

    this.handleGameSelect = this.handleGameSelect.bind(this);
  }

  handleGameSelect(event) {
    this.setState({ current_game: event.target.value })
    if (event.target.value != '--None--')
      this.setState({game_selected: true});
    else
      this.setState({game_selected: false});
  }

  render() {
    return (
      <React.Fragment>
        <h1 align="center"> Welcome to Raja's Game Room </h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>What do you want to play?</Form.Label>
            <Form.Control as="select" onChange={this.handleGameSelect}>
              <option>--None--</option>
              <option>Donkey</option>
              <option>Uno</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter passcode</Form.Label>
            <Form.Control type="password" placeholder="Password" disabled={!this.state.game_selected}/>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!this.state.game_selected}>Authenticate</Button>
        </Form>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);