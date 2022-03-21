import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddProps } from './Add.types';

export const Component = (props: IconsAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add</Default>;
};

export default {
  Component,
};
