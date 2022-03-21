import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCheckBoxOutlineBlankProps } from './CheckBoxOutlineBlank.types';

export const Component = (props: IconsCheckBoxOutlineBlankProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>check_box_outline_blank</Default>;
};

export default {
  Component,
};
