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
        )
    },
    
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this._renderComment)}
            </div>
        );
    }
});

export default Comments;