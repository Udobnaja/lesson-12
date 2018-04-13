import React from 'react';
import { decl, Bem } from 'bem-react-core';
import 'e:Text'
export default decl({
  block: 'Logo',
  content(){
    return <Bem elem="Text" tag="span" >Яндек Дзен</Bem>
  }
})
