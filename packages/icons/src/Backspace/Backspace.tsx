import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBackspaceProps } from './Backspace.types';

export const Component = (props: IconsBackspaceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>backspace</Default>;
};

export default {
  Component,
};
