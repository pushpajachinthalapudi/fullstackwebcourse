import React from 'react';
import { useContext } from 'react';
import {x} from './A';

function C() {
    const context= useContext(x)
  return (
    <div>
      {context}
    </div>
  )
}

export default C
