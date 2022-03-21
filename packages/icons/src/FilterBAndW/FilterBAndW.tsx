import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterBAndWProps } from './FilterBAndW.types';

export const Component = (props: IconsFilterBAndWProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_b_and_w</Default>;
};

export default {
  Component,
};
