import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDockProps } from './Dock.types';

export const Component = (props: IconsDockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dock</Default>;
};

export default {
  Component,
};
