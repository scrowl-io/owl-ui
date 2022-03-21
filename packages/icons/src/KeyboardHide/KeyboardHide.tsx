import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardHideProps } from './KeyboardHide.types';

export const Component = (props: IconsKeyboardHideProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_hide</Default>;
};

export default {
  Component,
};
