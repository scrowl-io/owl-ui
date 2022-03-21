import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCopyrightProps } from './Copyright.types';

export const Component = (props: IconsCopyrightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>copyright</Default>;
};

export default {
  Component,
};
