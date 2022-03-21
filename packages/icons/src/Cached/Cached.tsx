import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCachedProps } from './Cached.types';

export const Component = (props: IconsCachedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cached</Default>;
};

export default {
  Component,
};
