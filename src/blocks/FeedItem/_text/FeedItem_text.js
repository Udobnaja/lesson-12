import React, {Fragment} from 'react';
import { declMod, Bem} from 'bem-react-core';
import FeedItemFeedback from 'b:FeedItemFeedback';

export default declMod(({image}) => !image, {
  block: 'FeedItem',
  mods() {
    return { ...this.__base(...arguments), text: true};
  },
  content() {
    const {title, titleColor, description} = this.props;
    const style = {
      color: titleColor,
    };

    return  (
      <Fragment>
        <Bem elem="Title" tag="h2" style={style}>{title}</Bem>
        <Bem elem="Description" tag="p">{description}</Bem>
        <FeedItemFeedback />
      </Fragment>
    );
  }
})
