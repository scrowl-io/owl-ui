import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDnsProps } from './Dns.types';

export const Component = (props: IconsDnsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dns</Default>;
};

export default {
  Component,
};
