import React from 'react';

const Story = ({ item }) => {
  return (
    <div>
      <div><a href={item.url}>{item.title}</a></div>
      <div>Author: {item.by}</div>
      <div>Score: {item.score}</div>
      <div>No of Comments: {item.kids.length}</div>
    </div>
  )
}

export default Story
