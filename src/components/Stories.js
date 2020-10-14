import React, { useState, useEffect } from 'react';
import Item from './Item'
import { getList } from '../utils/Api'
import InfiniteScroll from 'react-infinite-scroller';
import paginate from 'paginate-array'

const Stories = props => {
  const [stories, setStories] = useState(null)
  const [renderlist, setrenderlist] = useState([])
  const [hasMoreItems, sethasMoreItems] = useState(true)
  const [initialLoad, setinitialLoad] = useState(true)

  useEffect(() => {
    const fetchAndSetStories = async () => {
      const result = await getList(props.storytype)
      if (result.resolved) {
        setStories(result.data)
      }
    }
    fetchAndSetStories()
  }, [props.storytype])

  const loadItems = (pageNumber) => {
    const pageItems = paginate(stories, pageNumber, 10) //10 items per page
    setrenderlist([...renderlist, ...pageItems.data])
    setinitialLoad(false)
    sethasMoreItems(pageItems.currentPage !== pageItems.totalPages)
  }

  if (!stories) {
    return null
  }
  const loader = <div className="loader" key={0}>Loading ...</div>;

  return (
    <div className="stories">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadItems}
        hasMore={hasMoreItems}
        initialLoad={initialLoad}
        loader={loader}>
          {renderlist.map((id)=><Item key={id} id={id} />)}
      </InfiniteScroll>
    </div>
  )
}

export default Stories;
