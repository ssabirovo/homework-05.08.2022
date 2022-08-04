import React, { Component } from 'react'
import { ordersIcons } from '../icons'
import "./link.scss"


class Link extends Component {
  render() {
    return (
        <div className="link">{ordersIcons}
        <p>Orders</p></div>
    )
  }
}

export default Link