import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCheckBoxProps } from './CheckBox.types';

export const Component = (props: IconsCheckBoxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>check_box</Default>;
};

export default {
  Component,
};
