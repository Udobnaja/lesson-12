import { declMod } from 'bem-react-core';

export default declMod(({size}) => size === 'l', {
  block: 'FeedItem',
  mods() {
    return { ...this.__base(...arguments), size: 'l'};
  },
})

