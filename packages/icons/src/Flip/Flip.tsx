import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlipProps } from './Flip.types';

export const Component = (props: IconsFlipProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flip</Default>;
};

export default {
  Component,
};
