import React, {Fragment} from 'react';
import { decl, Bem } from 'bem-react-core';
import 'e:Title';
import 'e:Description';
import Image from 'e:Image';
import FeedItemFeedback from 'b:FeedItemFeedback';

import 'm:size=l|m|s';
import 'm:type=text';
import 'm:description';

export default decl({
  block: 'FeedItem',
  tag: 'article',
  mods({size}){
    return {size};
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
        <FeedItemFeedback />
      </Fragment>
    );

  }
});
