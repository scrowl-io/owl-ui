import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccessTimeProps } from './AccessTime.types';

export const Component = (props: IconsAccessTimeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>access_time</Default>;
};

export default {
  Component,
};
