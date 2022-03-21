import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsIndeterminateCheckBoxProps } from './IndeterminateCheckBox.types';

export const Component = (props: IconsIndeterminateCheckBoxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>indeterminate_check_box</Default>;
};

export default {
  Component,
};
