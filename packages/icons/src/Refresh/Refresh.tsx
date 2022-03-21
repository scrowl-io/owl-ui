import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRefreshProps } from './Refresh.types';

export const Component = (props: IconsRefreshProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>refresh</Default>;
};

export default {
  Component,
};
