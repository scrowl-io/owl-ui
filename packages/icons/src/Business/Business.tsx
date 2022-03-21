import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBusinessProps } from './Business.types';

export const Component = (props: IconsBusinessProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>business</Default>;
};

export default {
  Component,
};
