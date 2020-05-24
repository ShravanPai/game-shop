import React from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

class Donkey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            my_cards: null,
            card_deck: null,
            game_rooms: []
        };

    }

    componentDidMount() {
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

    createRoom() {
        
    }

    render() {
        return (
            <React.Fragment>
                <h3 align="center"> Welcome to Donkey, {this.props.userName}</h3> <br />
                <div>
                    {this.state.game_rooms.map((item, index) => (
                        <Button variant="outline-primary" key={index} > {item} </Button>
                    ))}
                </div>

            </React.Fragment>
        );
    }
}



export default Donkey