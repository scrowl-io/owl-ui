import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardArrowDownProps } from './KeyboardArrowDown.types';

export const Component = (props: IconsKeyboardArrowDownProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_arrow_down</Default>;
};

export default {
  Component,
};
