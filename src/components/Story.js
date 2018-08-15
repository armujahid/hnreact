import React from 'react';

const Story = ({ item }) => {
  return (
    <div>
      <div><a href={item.url}>{item.title}</a></div>
      <div>Author: {item.by}</div>
      <div>Score: {item.score}</div>
      <div>No of Comments: {item.kids? item.kids.length: 0}</div>
    </div>
  )
}

export default Story
