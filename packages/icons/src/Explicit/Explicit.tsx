import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExplicitProps } from './Explicit.types';

export const Component = (props: IconsExplicitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>explicit</Default>;
};

export default {
  Component,
};
