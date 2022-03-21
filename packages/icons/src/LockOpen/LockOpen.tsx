import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLockOpenProps } from './LockOpen.types';

export const Component = (props: IconsLockOpenProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>lock_open</Default>;
};

export default {
  Component,
};
