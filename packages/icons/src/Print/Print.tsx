import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPrintProps } from './Print.types';

export const Component = (props: IconsPrintProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>print</Default>;
};

export default {
  Component,
};
