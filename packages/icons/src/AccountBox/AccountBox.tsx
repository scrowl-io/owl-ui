import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccountBoxProps } from './AccountBox.types';

export const Component = (props: IconsAccountBoxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>account_box</Default>;
};

export default {
  Component,
};
