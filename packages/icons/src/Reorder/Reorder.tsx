import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReorderProps } from './Reorder.types';

export const Component = (props: IconsReorderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>reorder</Default>;
};

export default {
  Component,
};
