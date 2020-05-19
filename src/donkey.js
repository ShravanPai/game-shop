import React from 'react';

class Donkey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            my_cards: null,
            card_deck: null,
        };

    }

    render() {
        return (
            <React.Fragment>
                <h3 align="center"> Welcome to Donkey </h3> <br />
                <h4 align="right"> Game host: {this.props.hostName} </h4>

            </React.Fragment>
        );
    }
}



export default Donkey