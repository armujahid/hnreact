import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import { handleClick } from '../utils/helper'

const Job = ({ item }) => {
  return (
    <Card onClick={()=> item.url? window.open(item.url, "_blank"): null}>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <p className="card-text">{item.score} points by <u onClick={(event) => handleClick(event, 'user', item.by)}>{item.by}</u> | <u onClick={(event) => handleClick(event, 'item', item.id)}>view full description</u></p>
      </CardBody>
    </Card>
  )
}

export default Job
