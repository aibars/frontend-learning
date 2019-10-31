import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.component {
    render() {
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => { post.code === postId });
        const post = this.props.posts[i];
        const comments = this.props.comments[postId] || [];
        return (
            <div className="singlePhoto">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={comments} {...this.props} />
            </div>
        );
    }
}

export default Single;