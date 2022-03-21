import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDialpadProps } from './Dialpad.types';

export const Component = (props: IconsDialpadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dialpad</Default>;
};

export default {
  Component,
};
