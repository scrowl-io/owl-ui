import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBuildProps } from './Build.types';

export const Component = (props: IconsBuildProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>build</Default>;
};

export default {
  Component,
};
