import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardArrowUpProps } from './KeyboardArrowUp.types';

export const Component = (props: IconsKeyboardArrowUpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_arrow_up</Default>;
};

export default {
  Component,
};
