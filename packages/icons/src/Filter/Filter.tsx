import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterProps } from './Filter.types';

export const Component = (props: IconsFilterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter</Default>;
};

export default {
  Component,
};
