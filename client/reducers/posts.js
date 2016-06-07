// a reducer takes in two things:
// 1. The action (info about what happened)
// 2. Copy of current state

// the first time it runs we set state to an empty array

function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    return state;
}

export default posts;