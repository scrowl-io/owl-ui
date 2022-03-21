import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVideoCallProps } from './VideoCall.types';

export const Component = (props: IconsVideoCallProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>video_call</Default>;
};

export default {
  Component,
};
