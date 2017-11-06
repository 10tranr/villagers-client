import React, { Component } from 'react'
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navigationbar/navbar';

export default class Base extends Component {
  constructor(props, context) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='base-page'>
        <Navbar />
        <Sidebar children={this.props.children}/>
      </div>
    )
  }
}
