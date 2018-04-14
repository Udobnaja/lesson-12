import { declMod } from 'bem-react-core';

export default declMod({ size : 'm' }, {
  block: 'FeedItem',
  mods() {
    return { ...this.__base(...arguments), size: 'm'};
  },
})
