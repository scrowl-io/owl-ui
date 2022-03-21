import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShareProps } from './Share.types';

export const Component = (props: IconsShareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>share</Default>;
};

export default {
  Component,
};
