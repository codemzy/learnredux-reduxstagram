// increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        // in ES2015 in object 'index: index' is same as just 'index'
        index: index
    }
}

// add comment
export function addComment(postID, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postID,
        author,
        comment
    }
}

// remove comment
export function removeComment(postID, commentId) {
    return {
        type: 'REMOVE_COMMENT',
        postID,
        commentId
    }
}

