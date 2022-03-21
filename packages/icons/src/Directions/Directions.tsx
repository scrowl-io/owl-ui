import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsProps } from './Directions.types';

export const Component = (props: IconsDirectionsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions</Default>;
};

export default {
  Component,
};
