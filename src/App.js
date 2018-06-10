import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'

const initialState = {
  name: 'Ernar',
  surname: 'Mussin'
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

const store = createStore(rootReducer)

console.log(store.getState())

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />  
      </div>
    );
  }
}

export default App;
