import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMouseProps } from './Mouse.types';

export const Component = (props: IconsMouseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mouse</Default>;
};

export default {
  Component,
};
