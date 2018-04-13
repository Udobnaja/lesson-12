import React, {Fragment} from 'react';
import { decl, Bem } from 'bem-react-core';
import 'b:Control';
import 'b:Control m:icon=heart|actions';
import 'm:channel';

export default decl({
  block: 'FeedItemFeedback',
  tag: 'footer',
  content() {
    return (
      <Fragment>
        <Bem elem="Control" tag="button" mix={{ block : 'Control', mods: {icon: 'actions'}}} title="more"/>
        <Bem elem="Control" tag="button" mix={{ block : 'Control', mods: {icon: 'heart'} }} title="like"/>
      </Fragment>
    );
  }
});
