import React, { Component } from 'react';
import Story from './Story'
import Job from './Job'
import { getItem } from '../utils/Api'
import CustomLoader from './CustomLoader'

class Item extends Component {
  state = {
    item : null
  }
  async componentDidMount() {
    const result = await getItem(this.props.id)
    if (result.resolved) {
      this.setState({ item : result.data})
    }
  }
  render() {
    const { item } = this.state
    if (!item) {
      return <CustomLoader />
    }
    if (item.type === 'story') {
      return <Story item={item}/>
    }
    if (item.type === 'job') {
      return <Job item={item}/>
    }
    return (
      <div>
        Rendering of {item.type} is not currently supported :(
      </div>
    );
  }
}

export default Item
