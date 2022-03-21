import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArrowDropDownProps } from './ArrowDropDown.types';

export const Component = (props: IconsArrowDropDownProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>arrow_drop_down</Default>;
};

export default {
  Component,
};
