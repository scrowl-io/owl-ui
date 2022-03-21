import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardArrowLeftProps } from './KeyboardArrowLeft.types';

export const Component = (props: IconsKeyboardArrowLeftProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_arrow_left</Default>;
};

export default {
  Component,
};
