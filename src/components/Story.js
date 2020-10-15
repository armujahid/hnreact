import { Card, CardBody, CardTitle} from 'reactstrap';
import { handleClick } from '../utils/helper'

const Story = ({ item }) => {
  return (
    <Card onClick={()=> item.url? window.open(item.url, "_blank"): null}>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <p className="card-text">{item.score} points by <u onClick={(event) => handleClick(event, 'user', item.by)}>{item.by}</u> | <u onClick={(event) => handleClick(event, 'item', item.id)}>{item.kids? item.kids.length: 0} comments</u></p>
      </CardBody>
    </Card>
  )
}

export default Story
