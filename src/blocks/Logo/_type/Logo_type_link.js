import { declMod } from 'bem-react-core';

export default declMod(({href}) => !!href, {
  block: 'Logo',
  tag: 'a',
  mods() {
    return { ...this.__base(...arguments), type: 'link'};
  },
  attrs({href}){
    return {
      href
    }
  },
  content() {
    return [
      this.__base(...arguments)
    ]
  }
});
