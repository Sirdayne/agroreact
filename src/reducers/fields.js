export default function fields (state = [], action) {
    if (action.type === 'CHANGE_FIELDS') {
        return { ...state, name: action.payload}
    }
    return state
}
