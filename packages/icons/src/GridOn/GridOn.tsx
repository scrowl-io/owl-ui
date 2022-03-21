import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGridOnProps } from './GridOn.types';

export const Component = (props: IconsGridOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>grid_on</Default>;
};

export default {
  Component,
};
