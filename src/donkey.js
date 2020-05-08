import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from './card'

class Donkey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {my_cards: null,
                      card_deck: null};
      }

    render() {

        return (
            <React.Fragment>

                <h1> Welcome to Donkey </h1>
                <Card value="./images/Diamond_1.png" />
            </React.Fragment>
        )
    }
}

export default Donkey