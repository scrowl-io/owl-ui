import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterNoneProps } from './FilterNone.types';

export const Component = (props: IconsFilterNoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_none</Default>;
};

export default {
  Component,
};
