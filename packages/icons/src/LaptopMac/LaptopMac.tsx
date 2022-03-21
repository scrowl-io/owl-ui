import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLaptopMacProps } from './LaptopMac.types';

export const Component = (props: IconsLaptopMacProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>laptop_mac</Default>;
};

export default {
  Component,
};
