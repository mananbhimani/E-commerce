const initalState = 0;

const changenum = (state = initalState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMNET": return state - 1;
        default:
            return state;
    }
}



export default changenum ;

