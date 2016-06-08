import React from 'react';

const Comments = React.createClass({
    
    _renderComment(comment, index) {
        return (
          <div className="comment" key={index}>
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment">&times;</button>
            </p>
          </div>
        );
    },
    
    _handleSubmit(e) {
        e.preventDefault();
        console.log('submitting the form');
        const postId = this.props.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(postId, author, comment);
    },
    
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this._renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this._handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
});

export default Comments;