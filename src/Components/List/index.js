import React, { Component } from 'react';

import './index.css';

class List extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let ListData = this.props ? this.props.params : [];
    const RenderList = ListData ? ListData.map((news) =>
        <div className="News-list">
            <h3 className="News-points">{news.points} Points</h3>
            <div className="News-title">{news.title} <span className="News-domain">{news.domain}</span> </div>
            <div className="News-details">By {news.user} <span className="time-ago">{news.time_ago}</span> | <span className="comments">{news.comments}</span></div>
        </div>
        ):''
    return (
        <div className="News-container">
            {RenderList}
        </div>
    );
  }
}

export default List;