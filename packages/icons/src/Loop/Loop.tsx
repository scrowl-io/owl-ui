import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLoopProps } from './Loop.types';

export const Component = (props: IconsLoopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>loop</Default>;
};

export default {
  Component,
};
