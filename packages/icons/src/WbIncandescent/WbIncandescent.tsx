import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWbIncandescentProps } from './WbIncandescent.types';

export const Component = (props: IconsWbIncandescentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wb_incandescent</Default>;
};

export default {
  Component,
};
