import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
    render() {
        console.log('a ver:' , this.props);
        return (
            <div className="photo-grid">
                {
                    this.props.posts.map((post, i) => {
                        return (<Photo {...this.props}
                            key={i}
                            i={i}
                            post={post} />);
                    })
                }
            </div>
        );
    }
}

export default PhotoGrid;