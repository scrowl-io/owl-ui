import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardArrowRightProps } from './KeyboardArrowRight.types';

export const Component = (props: IconsKeyboardArrowRightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_arrow_right</Default>;
};

export default {
  Component,
};
