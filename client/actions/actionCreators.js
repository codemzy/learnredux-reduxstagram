// increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        // in ES2015 in object 'index: index' is same as just 'index'
        index: index
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, commentId) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentId
    }
}

