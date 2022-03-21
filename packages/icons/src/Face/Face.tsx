import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFaceProps } from './Face.types';

export const Component = (props: IconsFaceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>face</Default>;
};

export default {
  Component,
};
