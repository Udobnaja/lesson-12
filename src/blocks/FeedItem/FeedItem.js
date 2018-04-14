import React, {Fragment} from 'react';
import { decl } from 'bem-react-core';
import Title from 'e:Title';
import 'e:Description';
import Image from 'e:Image';
import FeedItemFeedback from 'b:FeedItemFeedback';

import 'm:type=text';

export default decl({
  block: 'FeedItem',
  tag: 'article',
  content() {
    const {title, titleColor, image, channel} = this.props;

    return  (
      <Fragment>
        <Title title={title} titleColor={titleColor}/>
        <Image image={image} alt={title} />
        <FeedItemFeedback channel={channel} />
      </Fragment>
    );
  }
});
