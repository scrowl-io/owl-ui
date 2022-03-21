import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAspectRatioProps } from './AspectRatio.types';

export const Component = (props: IconsAspectRatioProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>aspect_ratio</Default>;
};

export default {
  Component,
};
