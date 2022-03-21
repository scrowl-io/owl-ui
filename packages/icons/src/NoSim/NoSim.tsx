import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNoSimProps } from './NoSim.types';

export const Component = (props: IconsNoSimProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>no_sim</Default>;
};

export default {
  Component,
};
