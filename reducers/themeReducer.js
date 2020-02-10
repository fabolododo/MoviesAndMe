const initialState = { toggleTheme: 'light' };

function toggleChangeTheme(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_DARK':
            return nextState = {
                ...state,
                toggleTheme: 'dark'
            };
        
        case 'TOGGLE_LIGHT':
            return nextState = {
                ...state,
                toggleTheme: 'light'
            };
    default:
        return  nextState || state;
    }
}

export default toggleChangeTheme