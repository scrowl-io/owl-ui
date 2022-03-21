import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCenterFocusWeakProps } from './CenterFocusWeak.types';

export const Component = (props: IconsCenterFocusWeakProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>center_focus_weak</Default>;
};

export default {
  Component,
};
