import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFunctionsProps } from './Functions.types';

export const Component = (props: IconsFunctionsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>functions</Default>;
};

export default {
  Component,
};
