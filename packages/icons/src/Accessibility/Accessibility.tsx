import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccessibilityProps } from './Accessibility.types';

export const Component = (props: IconsAccessibilityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>accessibility</Default>;
};

export default {
  Component,
};
