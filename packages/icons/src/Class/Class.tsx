import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsClassProps } from './Class.types';

export const Component = (props: IconsClassProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>class</Default>;
};

export default {
  Component,
};
