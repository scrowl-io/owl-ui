import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVideoLabelProps } from './VideoLabel.types';

export const Component = (props: IconsVideoLabelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>video_label</Default>;
};

export default {
  Component,
};
