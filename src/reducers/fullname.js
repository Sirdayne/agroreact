const initialState = {
    name: 'Ernar',
    surname: 'Mussin'
}

export default function fullname (state = initialState, action) {
    if (action.type === 'CHANGE_NAME') {
        return { ...state, name: action.payload}
    }
    if (action.type === 'CHANGE_SURNAME') {
        return { ...state, surname: action.payload}
    }
    return state
}