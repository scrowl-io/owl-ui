import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRowingProps } from './Rowing.types';

export const Component = (props: IconsRowingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rowing</Default>;
};

export default {
  Component,
};
