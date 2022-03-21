import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardCapslockProps } from './KeyboardCapslock.types';

export const Component = (props: IconsKeyboardCapslockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_capslock</Default>;
};

export default {
  Component,
};
