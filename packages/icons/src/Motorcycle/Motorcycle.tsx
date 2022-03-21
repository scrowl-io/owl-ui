import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMotorcycleProps } from './Motorcycle.types';

export const Component = (props: IconsMotorcycleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>motorcycle</Default>;
};

export default {
  Component,
};
