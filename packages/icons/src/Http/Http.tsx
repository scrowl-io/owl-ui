import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHttpProps } from './Http.types';

export const Component = (props: IconsHttpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>http</Default>;
};

export default {
  Component,
};
