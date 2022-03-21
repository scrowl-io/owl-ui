import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardBackspaceProps } from './KeyboardBackspace.types';

export const Component = (props: IconsKeyboardBackspaceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_backspace</Default>;
};

export default {
  Component,
};
