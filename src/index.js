import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = {
    name: 'Ernar',
    surname: 'Mussin'
}

const actionChangeName = {
    type: 'CHANGE_NAME',
    payload: null
}

const actionChangeSurname = {
    type: 'CHANGE_SURNAME',
    payload: null
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_NAME') {
        state.name = action.payload
    }
    if (action.type === 'CHANGE_SURNAME') {
        state.surname = action.payload
    }
return state
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState())

const mapStateToProps = (state) => {
    console.log(state)
    return {
        name: state.name,
        surname: state.surname
    }
}

const WrapComponent = connect(mapStateToProps)(App)

ReactDOM.render(<Provider store={store}>
        <WrapComponent />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
