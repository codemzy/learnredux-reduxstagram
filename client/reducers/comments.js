function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}

function postComments(state = [], action) {
    if (action.type === 'ADD_COMMENT') {
        // return exisitng state with new comment
        return [...state, {
            user: action.author,
            text: action.comment
        }];
    } else if (action.type === 'REMOVE_COMMENT') {
        // return the new state wihtout the deleted comment
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ];
    } else {
        return state;
    }
}

export default comments;