import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Donkey from './donkey';

class GameRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_game: '', game_selected: false };

    this.handleGameSelect = this.handleGameSelect.bind(this);
  }

  handleGameSelect(event) {
    this.setState({ current_game: event.target.value })
    if (event.target.value != '--None--')
      this.setState({ game_selected: true });
    else
      this.setState({ game_selected: false });
  }

  render() {

    let game;
    if (this.state.current_game == 'Donkey')
      game = <Donkey />;

    return (
      <React.Fragment>
        <h1 align="center"> Welcome to Raja's Game Room </h1>
        {!this.state.game_selected ? 
        <Form>
          <Form.Group controlId="gameShopForm.GameSelect1">
            <Form.Label>What do you want to play?</Form.Label>
            <Form.Control as="select" onChange={this.handleGameSelect}>
              <option>--None--</option>
              <option>Donkey</option>
              <option>Uno</option>
            </Form.Control>
          </Form.Group>
        </Form>
        : null }

        {this.state.game_selected ?
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter passcode</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Authenticate</Button>
          </Form>
          : null
        }

       {game} 

        

      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <GameRoom />,
  document.getElementById('root')
);