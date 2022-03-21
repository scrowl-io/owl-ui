import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLaptopProps } from './Laptop.types';

export const Component = (props: IconsLaptopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>laptop</Default>;
};

export default {
  Component,
};
