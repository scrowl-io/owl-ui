import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropFreeProps } from './CropFree.types';

export const Component = (props: IconsCropFreeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_free</Default>;
};

export default {
  Component,
};
