import React, {Fragment} from 'react';
import { decl, Bem } from 'bem-react-core';
import 'e:Title';
import 'e:Description';
import Image from 'e:Image';
import FeedItemFeedback from 'b:FeedItemFeedback';

import 'm:size=l|m|s';
import 'm:type=text';

export default decl({
  block: 'FeedItem',
  tag: 'article',
  mods({size, image}){
    return image ? {size} : {size, type: 'text'};
  },
  content() {
    const {title, titleColor, description, image} = this.props;
    const style = {
      color: titleColor,
    };

    return  (
      <Fragment>
        <Bem elem="Title" tag="h2" style={style}>{title}</Bem>
        <Image image={image} alt={title} />
        <Bem elem="Description" tag="p">{description}</Bem>
        <FeedItemFeedback />
      </Fragment>
    );

  }
});
