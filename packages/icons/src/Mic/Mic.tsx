import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMicProps } from './Mic.types';

export const Component = (props: IconsMicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mic</Default>;
};

export default {
  Component,
};
