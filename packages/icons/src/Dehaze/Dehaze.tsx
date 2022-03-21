import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDehazeProps } from './Dehaze.types';

export const Component = (props: IconsDehazeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dehaze</Default>;
};

export default {
  Component,
};
