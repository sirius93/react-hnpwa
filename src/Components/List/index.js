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
            <h3 className="News-points">{news.points} ★★★</h3>
            <div className="News-content">
                <div className="News-title">{news.title} <span className="News-domain">{news.domain}</span> </div>
                <div className="News-details">By <a href="">{news.user}</a> | <span className="time-ago">{news.time_ago}</span></div>
                <div className="comments"><a href="#">{news.comments_count} Comments</a></div>
            </div>
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