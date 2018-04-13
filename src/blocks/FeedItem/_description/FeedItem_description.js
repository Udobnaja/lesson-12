import React, {Fragment} from 'react';
import { declMod, Bem} from 'bem-react-core';
import FeedItemFeedback from 'b:FeedItemFeedback';
import Image from 'e:Image';
import Title from 'e:Title';

export default declMod(({description, image}) => !!(description && image), {
  block: 'FeedItem',
  mods() {
    return { ...this.__base(...arguments), description: true};
  },
  content() {
    const {title, titleColor, image, description} = this.props;

    return  (
      <Fragment>
        <Title title={title} titleColor={titleColor}/>
        <Image image={image} alt={title} />
        <Bem elem="Description" tag="p">{description}</Bem>
        <FeedItemFeedback />
      </Fragment>
    );
  }
})

