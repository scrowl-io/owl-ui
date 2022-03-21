import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPoolProps } from './Pool.types';

export const Component = (props: IconsPoolProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pool</Default>;
};

export default {
  Component,
};
