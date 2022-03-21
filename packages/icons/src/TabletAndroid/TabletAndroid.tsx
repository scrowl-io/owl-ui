import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTabletAndroidProps } from './TabletAndroid.types';

export const Component = (props: IconsTabletAndroidProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tablet_android</Default>;
};

export default {
  Component,
};
