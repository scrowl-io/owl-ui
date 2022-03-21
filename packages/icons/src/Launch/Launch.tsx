import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLaunchProps } from './Launch.types';

export const Component = (props: IconsLaunchProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>launch</Default>;
};

export default {
  Component,
};
