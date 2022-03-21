import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpaceBarProps } from './SpaceBar.types';

export const Component = (props: IconsSpaceBarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>space_bar</Default>;
};

export default {
  Component,
};
