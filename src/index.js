import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    name: 'Ernar',
    surname: 'Mussin'
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_NAME') {
        return { ...state, name: action.payload}
    }
    if (action.type === 'CHANGE_SURNAME') {
        return { ...state, surname: action.payload}
    }
    return state
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState())

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
