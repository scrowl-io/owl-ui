import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSlideshowProps } from './Slideshow.types';

export const Component = (props: IconsSlideshowProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>slideshow</Default>;
};

export default {
  Component,
};
