import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderAllProps } from './BorderAll.types';

export const Component = (props: IconsBorderAllProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_all</Default>;
};

export default {
  Component,
};
