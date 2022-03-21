import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewQuiltProps } from './ViewQuilt.types';

export const Component = (props: IconsViewQuiltProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_quilt</Default>;
};

export default {
  Component,
};
