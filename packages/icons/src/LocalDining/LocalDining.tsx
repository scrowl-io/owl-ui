import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalDiningProps } from './LocalDining.types';

export const Component = (props: IconsLocalDiningProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_dining</Default>;
};

export default {
  Component,
};
