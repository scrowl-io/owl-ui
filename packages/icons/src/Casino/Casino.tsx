import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCasinoProps } from './Casino.types';

export const Component = (props: IconsCasinoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>casino</Default>;
};

export default {
  Component,
};
