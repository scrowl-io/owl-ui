import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWebProps } from './Web.types';

export const Component = (props: IconsWebProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>web</Default>;
};

export default {
  Component,
};
