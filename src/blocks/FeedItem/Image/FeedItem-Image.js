import React, {Fragment} from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block : 'FeedItem',
  elem : 'Image',
  tag: 'picture',
  content() {
    const {image, alt} = this.props;
    const [img, ext] = image.split('.');
    return (
      <Fragment>
        <source srcSet={`${img}@2x.${ext}, ${img}@3x.${ext} 3x`} media="(min-width: 768px)"/>
        <img src={image} srcSet={`${img}@2x.${ext} 2x, ${img}@3x.${ext} 3x`} alt={alt}/>
      </Fragment>);
  }
});
