import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTollProps } from './Toll.types';

export const Component = (props: IconsTollProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>toll</Default>;
};

export default {
  Component,
};
