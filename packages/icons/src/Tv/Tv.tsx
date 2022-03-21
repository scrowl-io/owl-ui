import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTvProps } from './Tv.types';

export const Component = (props: IconsTvProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tv</Default>;
};

export default {
  Component,
};
