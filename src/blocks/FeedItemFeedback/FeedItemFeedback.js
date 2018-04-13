import React, {Fragment} from 'react';
import { decl, Bem } from 'bem-react-core';
import 'b:Control';
import 'b:Control m:icon=heart|actions';

export default decl({
  block: 'FeedItemFeedback',
  content() {
    return (
      <Fragment>
        <Bem elem="Control" tag="button" mix={{ block : 'Control', mods: {icon: 'heart'} }} title="like"/>
        <Bem elem="Control" tag="button" mix={{ block : 'Control', mods: {icon: 'actions'}}} title="more"/>
      </Fragment>
    );
  }
});
