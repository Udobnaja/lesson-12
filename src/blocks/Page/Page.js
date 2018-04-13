import React,  { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'b:Header';
import Feed from 'b:Feed';

export default decl({
  block: 'Page',
  content() {
    return (
    <Fragment>
      <Header/>
      <main>
        <Feed mix={{ block : 'Container' }}/>
      </main>
    </Fragment>
    );
  }
});
