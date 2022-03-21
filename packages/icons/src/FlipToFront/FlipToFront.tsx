import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlipToFrontProps } from './FlipToFront.types';

export const Component = (props: IconsFlipToFrontProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flip_to_front</Default>;
};

export default {
  Component,
};
