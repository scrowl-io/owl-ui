import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLineStyleProps } from './LineStyle.types';

export const Component = (props: IconsLineStyleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>line_style</Default>;
};

export default {
  Component,
};
