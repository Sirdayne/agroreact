const initalState = {
    fields: [],
}

export default function entities (state = initalState, action) {
    if (action.type === 'CHANGE_FIELDS') {
        return { ...state, fields: action.payload}
    }
    return state
}
