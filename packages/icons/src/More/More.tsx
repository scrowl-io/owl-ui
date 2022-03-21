import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoreProps } from './More.types';

export const Component = (props: IconsMoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>more</Default>;
};

export default {
  Component,
};
