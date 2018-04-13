import React from 'react';
import { decl, Bem } from 'bem-react-core';
import 'e:Headline';

export default decl({
  block : 'FeedItem',
  elem : 'Title',
  tag: 'header',
  content() {
    const {title, titleColor} = this.props;
    const style = {
      color: titleColor,
    };

    return <Bem elem="Headline" tag="h1" style={style}>{title}</Bem>;
  }
});
