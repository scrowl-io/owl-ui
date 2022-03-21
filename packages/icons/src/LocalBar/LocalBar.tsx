import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalBarProps } from './LocalBar.types';

export const Component = (props: IconsLocalBarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_bar</Default>;
};

export default {
  Component,
};
