import React, { Component } from 'react'

export default class UserPresence extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (<div>
      <p>{this.props.name} is <b>{ this.state.active ? 'Present' : 'Absent' }</b></p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}