import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Donkey from './donkey';

class GameRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_game: '', game_selected: false };

    this.handleGameSelect = this.handleGameSelect.bind(this);
    this.leaveGame = this.leaveGame.bind(this);
  }

  handleGameSelect(event) {
    this.setState({ current_game: event.target.value })
    if (event.target.value != '--None--')
      this.setState({ game_selected: true });
    else
      this.setState({ game_selected: false });


    if (event.target.value == 'Donkey')
      this.setState({current_game: <Donkey />})
  }

  leaveGame() {
      if (window.confirm('Leave Game?')) {
        this.setState({current_game: null})
        this.setState({game_selected: false})
      }
  }

  render() {
    return (
      <React.Fragment>
        <h1 align="center"> Welcome to Raja's Game Room </h1>
        {!this.state.game_selected ? <HomeScreenForm onGameSelect={this.handleGameSelect} /> : null }
        {this.state.game_selected ?
          <div align="right">
          <Button variant="outline-danger" size="sm" onClick={this.leaveGame}>Leave Game</Button>
          </div>
          : null
        }

       {this.state.current_game}
      </React.Fragment>
    );
  }
}

class HomeScreenForm extends React.Component {
  render() {
    return (
      <Form>
      <Form.Group controlId="gameShopForm.GameSelect1">
        <Form.Label>What do you want to play?</Form.Label>
        <Form.Control as="select" onChange={this.props.onGameSelect}>
          <option>--None--</option>
          <option>Donkey</option>
          <option>Uno</option>
        </Form.Control>
      </Form.Group>
    </Form>
    );
  }
}

ReactDOM.render(
  <GameRoom />,
  document.getElementById('root')
);