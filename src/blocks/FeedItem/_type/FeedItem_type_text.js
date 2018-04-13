import React, {Fragment} from 'react';
import { declMod, Bem} from 'bem-react-core';
import FeedItemFeedback from 'b:FeedItemFeedback';
import Title from 'e:Title';

export default declMod(({image}) => !image, {
  block: 'FeedItem',
  mods() {
    return { ...this.__base(...arguments), type: 'text'};
  },
  content() {
    const {title, titleColor, description} = this.props;

    return  (
      <Fragment>
        <Title title={title} titleColor={titleColor}/>
        <Bem elem="Description" tag="p">{description}</Bem>
        <FeedItemFeedback />
      </Fragment>
    );
  }
})
