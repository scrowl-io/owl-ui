import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScreenLockLandscapeProps } from './ScreenLockLandscape.types';

export const Component = (props: IconsScreenLockLandscapeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>screen_lock_landscape</Default>;
};

export default {
  Component,
};
