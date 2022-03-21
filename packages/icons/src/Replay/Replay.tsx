import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReplayProps } from './Replay.types';

export const Component = (props: IconsReplayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>replay</Default>;
};

export default {
  Component,
};
