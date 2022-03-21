import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrokenImageProps } from './BrokenImage.types';

export const Component = (props: IconsBrokenImageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>broken_image</Default>;
};

export default {
  Component,
};
