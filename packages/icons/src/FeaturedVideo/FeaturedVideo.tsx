import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFeaturedVideoProps } from './FeaturedVideo.types';

export const Component = (props: IconsFeaturedVideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>featured_video</Default>;
};

export default {
  Component,
};
