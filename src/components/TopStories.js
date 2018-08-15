import React, { Component } from 'react';
import Item from './Item'
import { getTopStories } from '../utils/Api'
import InfiniteScroll from 'react-infinite-scroller';
import paginate from 'paginate-array'
class TopStories extends Component {
  state = {
    stories : null,
    renderlist: [],
    hasMoreItems: true
  }
  async componentDidMount() {
    const result = await getTopStories()
    console.log(result.data)
    if (result.resolved) {
      this.setState({ stories : result.data})
    }
  }
  loadItems = (pageNumber) => {
    const { stories, renderlist } = this.state
    const pageItems = paginate(stories, pageNumber, 10) //10 items per page
    this.setState({
      renderlist: [...renderlist, ...pageItems.data],
      hasMoreItems: pageItems.currentPage !== 2//pageItems.currentPage !== pageItems.totalPages
    })

  }

  render() {
    const { stories, renderlist, hasMoreItems } = this.state
    if (!stories) {
      return null
    }
    const loader = <div className="loader">Loading ...</div>;

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems}
        hasMore={hasMoreItems}
        threshold={50}
        loader={loader}>

        <div className="stories">
            {renderlist.map((id)=><Item key={id} id={id} />)}
        </div>
      </InfiniteScroll>
    );
  }
}

export default TopStories;
