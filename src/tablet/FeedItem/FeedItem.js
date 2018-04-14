import React, {Fragment} from 'react';
import { decl } from 'bem-react-core';
import 'e:Description';

import 'm:description';


export default decl({
  block: 'FeedItem',
  mods({size}){
    return {size};
  }
});
