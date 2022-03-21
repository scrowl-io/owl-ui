import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTrafficProps } from './Traffic.types';

export const Component = (props: IconsTrafficProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>traffic</Default>;
};

export default {
  Component,
};
