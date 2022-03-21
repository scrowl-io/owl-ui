import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDataUsageProps } from './DataUsage.types';

export const Component = (props: IconsDataUsageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>data_usage</Default>;
};

export default {
  Component,
};
