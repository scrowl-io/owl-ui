import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalPlayProps } from './LocalPlay.types';

export const Component = (props: IconsLocalPlayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_play</Default>;
};

export default {
  Component,
};
