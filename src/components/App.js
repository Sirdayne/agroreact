import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import { actionChangeName, actionChangeSurname } from '../actions/fullname'
import { actionChangeFields } from '../actions/entities'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import http from '../services/http'

import Fields from './fields'

class App extends Component {
  constructor(props) {
    super(props);
    //dont change after props changed? why wtf ??
    this.state = {
      fields: this.props.fields
    };
  }

  componentDidMount() {
    http.get('/fields/1').then(data => {
      this.props.changeFields(data)
    })
  }
  render() {
    const {name, surname, changeName, changeSurname, fields } = this.props

    console.log(this.props, this.state)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{ `${name} and ${surname}`}</h1>
        <input type="text" placeholder="Name" value={name} onChange={(event) => { changeName(event.target.value) }} />
        <input type="text" placeholder="Surname" value={surname} onChange={(event) => { changeSurname(event.target.value) }} />  
        <Fields fields={fields}/>
      </div>
    );
  }
}

const putStateToProps = (state) => {
  return {
      name: state.fullname.name,
      surname: state.fullname.surname,
      fields: state.entities.fields
  }
}

const putActionsToProps = (dispatch) => {
  return {
      changeName: bindActionCreators(actionChangeName, dispatch),
      changeSurname: bindActionCreators(actionChangeSurname, dispatch),
      changeFields:  bindActionCreators(actionChangeFields, dispatch)
  }
}

export default connect(putStateToProps, putActionsToProps)(App);
