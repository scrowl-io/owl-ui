import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardReturnProps } from './KeyboardReturn.types';

export const Component = (props: IconsKeyboardReturnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_return</Default>;
};

export default {
  Component,
};
