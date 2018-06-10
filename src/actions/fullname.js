export const actionChangeName = (newName) => {
    return {
        type: 'CHANGE_NAME',
        payload: newName
    }
}
  
export const actionChangeSurname = (newSurname) => {
    return {
        type: 'CHANGE_SURNAME',
        payload: newSurname
    }
}