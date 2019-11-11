import React from 'react';
class Img extends React.Component {

    render() {
        return (
            <img src={this.props.values.src} alt={this.props.values.alt}></img>
        );
    }
}

export default Img;