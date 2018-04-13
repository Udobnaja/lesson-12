import React, {Fragment} from 'react';
import { decl } from 'bem-react-core';
import Title from 'e:Title';
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
    const {title, titleColor, image} = this.props;

    return  (
      <Fragment>
        <Title title={title} titleColor={titleColor}/>
        <Image image={image} alt={title} />
        <FeedItemFeedback />
      </Fragment>
    );

  }
});
