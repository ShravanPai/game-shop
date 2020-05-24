import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Donkey from './donkey';
import axios from 'axios'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

/*
class GameRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host_name: null,
      game_rooms: [],
      game_selectd: false,
      current_game: null,
      current_game_room: null,
      host_is_me: false
    };

    this.renderTooltip = this.renderTooltip.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.setRoomName = this.setRoomName.bind(this);
    this.setHostName = this.setHostName.bind(this);
    this.fetchGameRooms = this.fetchGameRooms.bind(this);
    this.handleGameSelect = this.handleGameSelect.bind(this);
    this.leaveGame = this.leaveGame.bind(this);
  }

  componentDidMount() {
    this.fetchGameRooms();
  }

  renderTooltip(host) {
    return (
      <Tooltip id="button-tooltip" placement="auto-end">
        Room created by {host}
      </Tooltip>
    );
  }

  handleGameSelect(event) {
    this.setState({ current_game: event.target.value })
    if (event.target.value != '--None--')
      this.setState({ game_selected: true });
    else
      this.setState({ game_selected: false });


    if (event.target.value == 'Donkey')
      this.setState({ current_game: <Donkey /> })
  }

  leaveGame() {
    if (window.confirm('Leave Game?')) {
      this.setState({ current_game: null })
      this.setState({ game_selected: false })
    }
  }

  createRoom(event) {
    axios.post('http://localhost:9090/donkey/game-room', { name: this.state.room_name, host: this.state.host_name }, { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": 'application/json' } }).
      then(() => {
        this.setState({ current_game_room: this.state.room_name });
        this.setState({ host_is_me: true });
      }).
      catch(function (error) {
        console.log('Error here: ' + error);
      });
  }

  fetchGameRooms() {
    // Query game room backend api to fetch the list of game rooms
    axios.get("http://localhost:9090/donkey/game-rooms")
      .then((response) => {
        console.log(response);
        const roomMap = response.data;
        let roomDetailList = [];
        for (var roomName in roomMap)
          roomDetailList.push({ name: roomName, host: roomMap[roomName].host })

        this.setState({ game_rooms: roomDetailList });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setRoomName(event) {
    this.setState({ room_name: event.target.value })
  }

  setHostName(event) {
    this.setState({ host_name: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h1 align="center"> Welcome to Raja's Game Room </h1>
        {this.state.current_game_room == null ? <HomeScreenForm onGameSelect={this.handleGameSelect} /> : null}
        {this.state.current_game_room != null ?
          <div align="right">
            <Button variant="outline-danger" size="sm" onClick={this.leaveGame}>Leave Game</Button>
          </div>
          : null
        }

        <h4>Join a game room: </h4> <br />
      
        {this.state.game_selected ? <React.Fragment>
          <Form>
            <Form.Group controlId="formBasicGameRoom">
              <Form.Label>Create Room</Form.Label>
              <Form.Control type="text" placeholder="Enter room name" onChange={this.setRoomName} />
              <Form.Control type="text" placeholder="Your name" onChange={this.setHostName} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.createRoom}>
              Create Room
                  </Button>
          </Form>

          </React.Fragment>
          : null}
      </React.Fragment>
    );
  }
}
*/

class GameShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {game_selected: false,
                  current_game: null,
                  user_name: null};

    this.onGameSelect = this.onGameSelect.bind(this);
    this.leaveGame = this.leaveGame.bind(this);
  }

  onGameSelect(event) {
    var userName;
    if (!this.state.user_name) {
      userName = prompt('Please enter a user name. Page will be reset if you cancel or enter invalid user id');
      if (!userName || userName.trim() === "") {
        event.target.value = '--None--';
        return;
      }
      
      this.setState({user_name: userName});
    }
      
    this.setState({game_selected: true});
    if (event.target.value === 'Donkey')
      this.setState({current_game: <Donkey userName={userName}/>});

  }

  leaveGame() {
    if (window.confirm('Leave Game?'))
      this.setState({game_selected: false, current_game: null, user_name: null});
  }

  render() {
    return (
      <React.Fragment>
      <h1 align="center"> Welcome to Raja's Game Room </h1>

      {/* If game is not selected, show the games dropdown */}
      {!this.state.game_selected ? 
        <Form>
        <Form.Group controlId="gameShopForm.GameSelect1">
          <Form.Label>What do you want to play?</Form.Label>
          <Form.Control as="select" onChange={this.onGameSelect}>
            <option>--None--</option>
            <option>Donkey</option>
            <option>Uno</option>
          </Form.Control>
        </Form.Group>
        </Form>
        : 
          <React.Fragment>
          {this.state.current_game}
          <div align="right">
            <Button variant="outline-danger" size="sm" onClick={this.leaveGame}>Leave Game</Button>
          </div>
          </React.Fragment>
      }
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <GameShop />,
  document.getElementById('root')
);