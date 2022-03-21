import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCenterFocusStrongProps } from './CenterFocusStrong.types';

export const Component = (props: IconsCenterFocusStrongProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>center_focus_strong</Default>;
};

export default {
  Component,
};
