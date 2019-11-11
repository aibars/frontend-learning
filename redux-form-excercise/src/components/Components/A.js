import React from 'react';
class A extends React.Component {

    render() {
        return (
            <a
                href={this.props.values.href}
                target="_blank"
                rel="noopener noreferrer">
                {this.props.values.label}
            </a>
        );
    }
}


export default A;
