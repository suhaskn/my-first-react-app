import React, { Component } from 'react'

export default class UserBoard extends Component {
  render(){
    return <h1>{this.props.content}</h1>
  }
}