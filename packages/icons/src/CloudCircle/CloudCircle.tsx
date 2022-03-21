import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloudCircleProps } from './CloudCircle.types';

export const Component = (props: IconsCloudCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cloud_circle</Default>;
};

export default {
  Component,
};
