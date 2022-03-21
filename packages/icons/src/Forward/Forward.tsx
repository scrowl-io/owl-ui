import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsForwardProps } from './Forward.types';

export const Component = (props: IconsForwardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>forward</Default>;
};

export default {
  Component,
};
