import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCodeProps } from './Code.types';

export const Component = (props: IconsCodeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>code</Default>;
};

export default {
  Component,
};
