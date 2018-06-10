import React, { Component } from 'react'

export default class fields extends Component {
    render() {
        return (
        <div className="fields">  
            { this.props.fields.map(field => <span className="field" key={field.id}>{field.newName}</span> ) }
        </div>    
        );
    }
  }