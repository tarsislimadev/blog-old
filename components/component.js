import React from 'react'

import Head from '../components/head'

export default class Component extends React.Component {

  getText() {
    return this.props.children || this.props.text
  }

  render() {
    return (
      <>
        <Head />

        {this.getText()}
      </>
    )
  }
}
