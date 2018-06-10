import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { rootReducer } from './store/reducers'

import App from './components/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState())

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
