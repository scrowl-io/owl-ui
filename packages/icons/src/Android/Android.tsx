import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAndroidProps } from './Android.types';

export const Component = (props: IconsAndroidProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>android</Default>;
};

export default {
  Component,
};
