import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRvHookupProps } from './RvHookup.types';

export const Component = (props: IconsRvHookupProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rv_hookup</Default>;
};

export default {
  Component,
};
