import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddBoxProps } from './AddBox.types';

export const Component = (props: IconsAddBoxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_box</Default>;
};

export default {
  Component,
};
