import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import { actionChangeName, actionChangeSurname } from '../actions/fullname'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    const dispatch = this.props.dispatch
    
    const {name, surname, changeName, changeSurname } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{ `${name} and ${surname}`}</h1>
        <input type="text" placeholder="Name" value={name} onChange={(event) => { changeName(event.target.value) }} />
        <input type="text" placeholder="Surname" value={surname} onChange={(event) => { changeSurname(event.target.value) }} />  
      </div>
    );
  }
}

const putStateToProps = (state) => {
  //console.log(state)
  return {
      name: state.fullname.name,
      surname: state.fullname.surname
  }
}

const putActionsToProps = (dispatch) => {
  return {
      changeName: bindActionCreators(actionChangeName, dispatch),
      changeSurname: bindActionCreators(actionChangeSurname, dispatch)
  }
}

export default connect(putStateToProps, putActionsToProps)(App);
