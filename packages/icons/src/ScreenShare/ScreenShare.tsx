import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScreenShareProps } from './ScreenShare.types';

export const Component = (props: IconsScreenShareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>screen_share</Default>;
};

export default {
  Component,
};
