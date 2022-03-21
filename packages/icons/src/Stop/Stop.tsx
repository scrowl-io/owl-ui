import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStopProps } from './Stop.types';

export const Component = (props: IconsStopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stop</Default>;
};

export default {
  Component,
};
