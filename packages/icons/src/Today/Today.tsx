import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTodayProps } from './Today.types';

export const Component = (props: IconsTodayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>today</Default>;
};

export default {
  Component,
};
