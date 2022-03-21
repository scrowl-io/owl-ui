import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDragHandleProps } from './DragHandle.types';

export const Component = (props: IconsDragHandleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>drag_handle</Default>;
};

export default {
  Component,
};
