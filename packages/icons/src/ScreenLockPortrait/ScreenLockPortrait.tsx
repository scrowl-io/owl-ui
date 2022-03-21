import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScreenLockPortraitProps } from './ScreenLockPortrait.types';

export const Component = (props: IconsScreenLockPortraitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>screen_lock_portrait</Default>;
};

export default {
  Component,
};
