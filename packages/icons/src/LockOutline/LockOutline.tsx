import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLockOutlineProps } from './LockOutline.types';

export const Component = (props: IconsLockOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>lock_outline</Default>;
};

export default {
  Component,
};
