import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import 'b:Container';

import logo from './Logo/Header-Logo@2x.png';

export default decl({
  block: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Bem elem="Container" mix={{ block : 'Container' }}>
          <Bem elem="Logo"
               tag="img"
               src={logo}
               srcSet="./Logo/Header-Logo@2x.png 2x, ./Logo/Header-Logo@3x.png 2x"
               alt="Яндекс Дзен" />
        </Bem>
      </Fragment>
    );
  }
});
