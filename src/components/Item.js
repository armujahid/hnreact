import React, { Component } from 'react';
import Story from './Story'
import { getItem } from '../utils/Api'

class Item extends Component {
  state = {
    item : null
  }
  async componentDidMount() {
    const result = await getItem(this.props.id)
    console.log(result.data)
    if (result.resolved) {
      this.setState({ item : result.data})
    }
  }
  render() {
    const { item } = this.state
    if (!item) {
      return null
    }
    if (item.type === 'story') {
      return <Story item={item}/>
    }
    return (
      <div>
        Rendering of {item.type} is not currently supported :(
      </div>
    );
  }
}

export default Item
