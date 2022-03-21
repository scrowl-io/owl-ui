import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsUndoProps } from './Undo.types';

export const Component = (props: IconsUndoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>undo</Default>;
};

export default {
  Component,
};
