import React from 'react';
// reuse the Photo component
import Photo from './Photo';
// import the Comments component
import Comments from './Comments';

const Single = React.createClass({
    render() {
        // index of the post
        const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        const post = this.props.posts[index];
        const postComments = this.props.comments[this.props.params.postId] || [];
        // get us the post
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} postId={this.props.params.postId} addComment={this.props.addComment} removeComment={this.props.removeComment}/>
            </div>
        );
    }
});

export default Single;