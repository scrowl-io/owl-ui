import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocationOnProps } from './LocationOn.types';

export const Component = (props: IconsLocationOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>location_on</Default>;
};

export default {
  Component,
};
