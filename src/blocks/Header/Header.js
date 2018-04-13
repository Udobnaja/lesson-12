import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import 'b:Container';
import 'e:Logo';
import Logo from 'b:Logo m:type=link';

export default decl({
  block: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Bem elem="Container" mix={{ block : 'Container' }}>
          <Bem elem="Logo">
            <Logo href="/"/>
          </Bem>
        </Bem>
      </Fragment>
    );
  }
});
