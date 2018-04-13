import React from 'react';
import { decl } from 'bem-react-core';
import FeedItem from 'b:FeedItem';


export default decl({
  block: 'Feed',
  tag: 'section',
  state: {
    items: [],
  },
  componentDidMount() {
    fetch('https://udobnaja.github.io/lesson-1/api/feed/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({items: data.feed}))

  },
  content() {
    return this.state.items.map((item, index) => <FeedItem  {...item} key={index}/>);
  }
});
