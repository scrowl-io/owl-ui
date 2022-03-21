import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWbCloudyProps } from './WbCloudy.types';

export const Component = (props: IconsWbCloudyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wb_cloudy</Default>;
};

export default {
  Component,
};
