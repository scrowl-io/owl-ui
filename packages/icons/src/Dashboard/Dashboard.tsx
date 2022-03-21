import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDashboardProps } from './Dashboard.types';

export const Component = (props: IconsDashboardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dashboard</Default>;
};

export default {
  Component,
};
