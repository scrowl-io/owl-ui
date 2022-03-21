import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRouterProps } from './Router.types';

export const Component = (props: IconsRouterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>router</Default>;
};

export default {
  Component,
};
