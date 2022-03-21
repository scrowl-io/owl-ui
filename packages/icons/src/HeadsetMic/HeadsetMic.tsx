import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHeadsetMicProps } from './HeadsetMic.types';

export const Component = (props: IconsHeadsetMicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>headset_mic</Default>;
};

export default {
  Component,
};
