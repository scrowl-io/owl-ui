import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoreVertProps } from './MoreVert.types';

export const Component = (props: IconsMoreVertProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>more_vert</Default>;
};

export default {
  Component,
};
