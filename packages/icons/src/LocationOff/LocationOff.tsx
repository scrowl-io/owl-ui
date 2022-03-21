import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocationOffProps } from './LocationOff.types';

export const Component = (props: IconsLocationOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>location_off</Default>;
};

export default {
  Component,
};
