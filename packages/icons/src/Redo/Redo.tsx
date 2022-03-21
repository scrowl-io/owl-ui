import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRedoProps } from './Redo.types';

export const Component = (props: IconsRedoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>redo</Default>;
};

export default {
  Component,
};
