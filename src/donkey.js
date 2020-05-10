import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from './card'
import axios from 'axios'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Donkey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            my_cards: null,
            card_deck: null,
            game_started: false,
            game_rooms: [],
            current_game_room: null
        };

    }

    componentDidMount() {
        this.fetchGameRooms();
    }

    fetchGameRooms() {
        // Query game room backend api to fetch the list of game rooms
        axios.get("http://127.0.0.1:9090/donkey/game-rooms")
            .then((response) => {
                this.setState({ game_rooms: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <h3 align="center"> Welcome to Donkey </h3>
                {!this.state.game_started ? <GameRooms hosts={this.state.game_rooms} gameStarted="false" /> : null}

            </React.Fragment>
        );
    }
}

class GameRooms extends React.Component {
    constructor(props) {
        super(props);
        this.renderTooltip = this.renderTooltip.bind(this);
    }

    renderTooltip(host) {

        return (
            <Tooltip id="button-tooltip" placement="auto-end">
              Room created by {host}
            </Tooltip>
          );
    }

    render() {
        return (
            <React.Fragment>
                <h4>Join a game room: </h4> <br />
                {this.props.gameStarted == 'false' ?
                    this.props.hosts.map((value, index) => {
                        return <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={() => this.renderTooltip(value.host)}>
                            <Button variant="outline-primary"> {value.name} </Button>
                        </OverlayTrigger>
                    })
                    : null}
            </React.Fragment>
        );
    }
}

export default Donkey