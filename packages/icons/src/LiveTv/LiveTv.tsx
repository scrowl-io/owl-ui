import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLiveTvProps } from './LiveTv.types';

export const Component = (props: IconsLiveTvProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>live_tv</Default>;
};

export default {
  Component,
};
