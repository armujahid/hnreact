import React, { useState, useEffect } from 'react';
import Story from './Story'
import Job from './Job'
import { getItem } from '../utils/Api'
import CustomLoader from './CustomLoader'

const Item = props => {
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchAndSetItem = async () => {
      const result = await getItem(props.id)
      if (result.resolved) {
        setItem(result.data)
      }
    }
    fetchAndSetItem()
  }, [props.id])

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
  )
}

export default Item
