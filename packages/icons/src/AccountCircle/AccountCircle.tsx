import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccountCircleProps } from './AccountCircle.types';

export const Component = (props: IconsAccountCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>account_circle</Default>;
};

export default {
  Component,
};
