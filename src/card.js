import React from 'react';
import Image from 'react-bootstrap/Image';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.onCardClick = this.onCardClick.bind(this);
      }

      onCardClick(e) {
        
      }

    render() {
        return (
            <img src={require('' + this.props.value)} draggable="true" height="200" width="150"/> 
        )
    }
}

export default Card