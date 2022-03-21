import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropLandscapeProps } from './CropLandscape.types';

export const Component = (props: IconsCropLandscapeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_landscape</Default>;
};

export default {
  Component,
};
