import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLabelProps } from './Label.types';

export const Component = (props: IconsLabelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>label</Default>;
};

export default {
  Component,
};
