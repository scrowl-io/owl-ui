import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsToysProps } from './Toys.types';

export const Component = (props: IconsToysProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>toys</Default>;
};

export default {
  Component,
};
