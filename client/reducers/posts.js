// a reducer takes in two things:
// 1. The action (info about what happened)
// 2. Copy of current state

// the first time it runs we set state to an empty array

function posts(state = [], action) {
    if (action.type === 'INCREMENT_LIKES') {
        console.log('Incrementing likes');
        // return the updated state
        const index = action.index;
        return [
            ...state.slice(0, index), // before the one we are updating
            {...state[index], likes: state[index].likes + 1}, // the one we are updating
            ...state.slice(index + 1), // after the one we are updating
        ];
    } else {
        return state;
    }
}

export default posts;