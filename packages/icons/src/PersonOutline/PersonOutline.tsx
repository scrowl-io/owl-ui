import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPersonOutlineProps } from './PersonOutline.types';

export const Component = (props: IconsPersonOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>person_outline</Default>;
};

export default {
  Component,
};
