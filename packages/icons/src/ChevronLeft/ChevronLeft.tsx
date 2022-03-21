import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChevronLeftProps } from './ChevronLeft.types';

export const Component = (props: IconsChevronLeftProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>chevron_left</Default>;
};

export default {
  Component,
};
