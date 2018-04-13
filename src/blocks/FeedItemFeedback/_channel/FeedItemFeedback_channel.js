import React, {Fragment} from 'react';
import { declMod, Bem} from 'bem-react-core';
import 'e:Channel';

export default declMod(({channel}) => !!channel, {
  block: 'FeedItemFeedback',
  mods() {
    return { ...this.__base(...arguments), channel: true};
  },
  content() {
    const {channel} = this.props;

    return  [
      <Bem elem="Channel" tag="span">{channel}</Bem>,
      ...this.__base(...arguments)
    ]
  }
})
