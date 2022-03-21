import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLockProps } from './Lock.types';

export const Component = (props: IconsLockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>lock</Default>;
};

export default {
  Component,
};
