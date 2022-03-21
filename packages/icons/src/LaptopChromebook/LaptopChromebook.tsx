import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLaptopChromebookProps } from './LaptopChromebook.types';

export const Component = (props: IconsLaptopChromebookProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>laptop_chromebook</Default>;
};

export default {
  Component,
};
