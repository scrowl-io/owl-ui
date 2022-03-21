import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNavigationProps } from './Navigation.types';

export const Component = (props: IconsNavigationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>navigation</Default>;
};

export default {
  Component,
};
