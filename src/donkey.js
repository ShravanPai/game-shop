import React from 'react';
import Image from 'react-bootstrap/Image';

class Donkey extends React.Component {


    render() {

        return (
            <React.Fragment>

                <h1> Welcome to Donkey </h1>
                <Image src={require('./images/card.png')} thumbnail />
            </React.Fragment>
        )


    }



}

export default Donkey