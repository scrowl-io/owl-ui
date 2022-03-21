import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScreenLockRotationProps } from './ScreenLockRotation.types';

export const Component = (props: IconsScreenLockRotationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>screen_lock_rotation</Default>;
};

export default {
  Component,
};
