import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlipToBackProps } from './FlipToBack.types';

export const Component = (props: IconsFlipToBackProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flip_to_back</Default>;
};

export default {
  Component,
};
