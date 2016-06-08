import React from 'react';
// reuse the Photo component
import Photo from './Photo';

const Single = React.createClass({
    render() {
        // index of the post
        const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        console.log(index);
        // get us the post
        return (
            <div className="single-photo">
                I'm the single
            </div>
        );
    }
});

export default Single;