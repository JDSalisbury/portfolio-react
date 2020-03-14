import React from 'react';
import { Link as LinkTo } from 'react-router-dom';

function Link({ path, children }) {
  return <LinkTo to={path}>{children}</LinkTo>;
}

export default Link;
