import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSmokeFreeProps } from './SmokeFree.types';

export const Component = (props: IconsSmokeFreeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>smoke_free</Default>;
};

export default {
  Component,
};
