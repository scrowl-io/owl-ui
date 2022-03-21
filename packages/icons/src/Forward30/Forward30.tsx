import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsForward30Props } from './Forward30.types';

export const Component = (props: IconsForward30Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>forward_30</Default>;
};

export default {
  Component,
};
