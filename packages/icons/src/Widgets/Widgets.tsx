import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWidgetsProps } from './Widgets.types';

export const Component = (props: IconsWidgetsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>widgets</Default>;
};

export default {
  Component,
};
