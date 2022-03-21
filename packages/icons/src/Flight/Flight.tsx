import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlightProps } from './Flight.types';

export const Component = (props: IconsFlightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flight</Default>;
};

export default {
  Component,
};
