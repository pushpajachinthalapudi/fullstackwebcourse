
import React, { Component } from 'react'

export default class Channel extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
  render() {
    return (
      <div>
        <h2>loginid={this.props.name}</h2>
        <h2>key={this.props.id}</h2>
      </div>
    )
  }
}
