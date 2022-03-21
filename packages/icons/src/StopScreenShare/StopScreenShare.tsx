import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStopScreenShareProps } from './StopScreenShare.types';

export const Component = (props: IconsStopScreenShareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stop_screen_share</Default>;
};

export default {
  Component,
};
