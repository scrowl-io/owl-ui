import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPowerProps } from './Power.types';

export const Component = (props: IconsPowerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>power</Default>;
};

export default {
  Component,
};
