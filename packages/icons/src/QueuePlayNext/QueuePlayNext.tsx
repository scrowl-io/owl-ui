import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsQueuePlayNextProps } from './QueuePlayNext.types';

export const Component = (props: IconsQueuePlayNextProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>queue_play_next</Default>;
};

export default {
  Component,
};
