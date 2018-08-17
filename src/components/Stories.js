import React, { PureComponent } from 'react';
import Item from './Item'
import { getList } from '../utils/Api'
import InfiniteScroll from 'react-infinite-scroller';
import paginate from 'paginate-array'
class Stories extends PureComponent {
  state = {
    stories : null,
    renderlist: [],
    hasMoreItems: true,
    initialLoad: true
  }
  async componentDidMount() {
    const result = await getList(this.props.storytype)
    if (result.resolved) {
      this.setState({ stories : result.data})
    }
  }
  loadItems = (pageNumber) => {
    const { stories, renderlist } = this.state
    const pageItems = paginate(stories, pageNumber, 10) //10 items per page
    this.setState({
      renderlist: [...renderlist, ...pageItems.data],
      initialLoad: false,
      hasMoreItems: pageItems.currentPage !== pageItems.totalPages
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
        initialLoad={this.state.initialLoad}
        loader={loader}>

        <div className="stories">
            {renderlist.map((id)=><Item key={id} id={id} />)}
        </div>
      </InfiniteScroll>
    );
  }
}

export default Stories;
