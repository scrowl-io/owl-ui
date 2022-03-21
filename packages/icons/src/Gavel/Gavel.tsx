import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGavelProps } from './Gavel.types';

export const Component = (props: IconsGavelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gavel</Default>;
};

export default {
  Component,
};
