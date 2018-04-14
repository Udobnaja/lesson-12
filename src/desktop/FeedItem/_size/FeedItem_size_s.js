import { declMod } from 'bem-react-core';

export default declMod({ size : 's' }, {
  block: 'FeedItem',
  mods() {
    return { ...this.__base(...arguments), size: 's'};
  },
})
