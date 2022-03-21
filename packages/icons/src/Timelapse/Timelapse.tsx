import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTimelapseProps } from './Timelapse.types';

export const Component = (props: IconsTimelapseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>timelapse</Default>;
};

export default {
  Component,
};
