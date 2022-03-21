import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTramProps } from './Tram.types';

export const Component = (props: IconsTramProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tram</Default>;
};

export default {
  Component,
};
