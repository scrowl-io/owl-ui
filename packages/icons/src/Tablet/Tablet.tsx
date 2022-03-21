import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTabletProps } from './Tablet.types';

export const Component = (props: IconsTabletProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tablet</Default>;
};

export default {
  Component,
};
