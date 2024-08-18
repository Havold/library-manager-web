export const DarkModeReducer = (state, action) => {
    switch (action) {
        case 'LIGHT':
            return false;
        case 'DARK':
            return true;
        case 'TOGGLE':
            return !state;
        default:
            throw new Error('Not valid action!');
    }
};
