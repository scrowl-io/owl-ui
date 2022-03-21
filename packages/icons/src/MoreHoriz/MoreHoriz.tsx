import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoreHorizProps } from './MoreHoriz.types';

export const Component = (props: IconsMoreHorizProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>more_horiz</Default>;
};

export default {
  Component,
};
