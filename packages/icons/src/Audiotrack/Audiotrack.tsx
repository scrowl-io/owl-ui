import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAudiotrackProps } from './Audiotrack.types';

export const Component = (props: IconsAudiotrackProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>audiotrack</Default>;
};

export default {
  Component,
};
