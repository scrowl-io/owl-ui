import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSlowMotionVideoProps } from './SlowMotionVideo.types';

export const Component = (props: IconsSlowMotionVideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>slow_motion_video</Default>;
};

export default {
  Component,
};
