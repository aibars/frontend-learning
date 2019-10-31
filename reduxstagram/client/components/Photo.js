import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
    render() {
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${this.props.post.code}`}>
                        {this.props.post.caption}
                    </Link>
                </div>
            </figure>
        );
    }
}

export default Photo;