import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const actionChangeName = (newName) => {
  return {
      type: 'CHANGE_NAME',
      payload: newName
  }
}

const actionChangeSurname = (newSurname) => {
  return {
      type: 'CHANGE_SURNAME',
      payload: newSurname
  }
}

class App extends Component {
  render() {
    const dispatch = this.props.dispatch
    const {name, surname, changeName, changeSurname } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" placeholder="Name" value={name} onChange={(event) => { changeName(event.target.value) }} />
        <input type="text" placeholder="Surname" value={surname} onChange={(event) => { changeSurname(event.target.value) }} />  
        <h1>{ `${name} and ${surname}`}</h1>
      </div>
    );
  }
}

const putStateToProps = (state) => {
  console.log(state)
  return {
      name: state.name,
      surname: state.surname
  }
}

const putActionsToProps = (dispatch) => {
  return {
      changeName: bindActionCreators(actionChangeName, dispatch),
      changeSurname: bindActionCreators(actionChangeSurname, dispatch)
  }
}

export default connect(putStateToProps, putActionsToProps)(App);
