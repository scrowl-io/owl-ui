import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSubwayProps } from './Subway.types';

export const Component = (props: IconsSubwayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>subway</Default>;
};

export default {
  Component,
};
