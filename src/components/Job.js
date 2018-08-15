import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';

const Job = ({ item }) => {
  return (
    <Card onClick={()=> item.url? window.open(item.url, "_blank"): null}>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <div>Author: {item.by}</div>
        <div>Score: {item.score}</div>
      </CardBody>
    </Card>
  )
}

export default Job