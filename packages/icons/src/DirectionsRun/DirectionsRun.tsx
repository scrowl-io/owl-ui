import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsRunProps } from './DirectionsRun.types';

export const Component = (props: IconsDirectionsRunProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_run</Default>;
};

export default {
  Component,
};
