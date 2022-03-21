import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewCarouselProps } from './ViewCarousel.types';

export const Component = (props: IconsViewCarouselProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_carousel</Default>;
};

export default {
  Component,
};
