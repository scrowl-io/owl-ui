import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMapProps } from './Map.types';

export const Component = (props: IconsMapProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>map</Default>;
};

export default {
  Component,
};
