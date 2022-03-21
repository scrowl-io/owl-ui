import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsComputerProps } from './Computer.types';

export const Component = (props: IconsComputerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>computer</Default>;
};

export default {
  Component,
};
