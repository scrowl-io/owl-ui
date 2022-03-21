import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropPortraitProps } from './CropPortrait.types';

export const Component = (props: IconsCropPortraitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_portrait</Default>;
};

export default {
  Component,
};
