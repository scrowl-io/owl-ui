import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardTabProps } from './KeyboardTab.types';

export const Component = (props: IconsKeyboardTabProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_tab</Default>;
};

export default {
  Component,
};
