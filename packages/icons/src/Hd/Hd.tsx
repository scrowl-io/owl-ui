import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHdProps } from './Hd.types';

export const Component = (props: IconsHdProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hd</Default>;
};

export default {
  Component,
};
