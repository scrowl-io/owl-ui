import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsErrorOutlineProps } from './ErrorOutline.types';

export const Component = (props: IconsErrorOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>error_outline</Default>;
};

export default {
  Component,
};
