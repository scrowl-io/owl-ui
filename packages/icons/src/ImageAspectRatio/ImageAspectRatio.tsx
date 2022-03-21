import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsImageAspectRatioProps } from './ImageAspectRatio.types';

export const Component = (props: IconsImageAspectRatioProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>image_aspect_ratio</Default>;
};

export default {
  Component,
};
