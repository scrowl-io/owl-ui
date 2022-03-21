import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHistoryProps } from './History.types';

export const Component = (props: IconsHistoryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>history</Default>;
};

export default {
  Component,
};
