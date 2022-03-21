import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLandscapeProps } from './Landscape.types';

export const Component = (props: IconsLandscapeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>landscape</Default>;
};

export default {
  Component,
};
