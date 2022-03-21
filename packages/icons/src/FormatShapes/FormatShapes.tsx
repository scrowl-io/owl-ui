import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatShapesProps } from './FormatShapes.types';

export const Component = (props: IconsFormatShapesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_shapes</Default>;
};

export default {
  Component,
};
