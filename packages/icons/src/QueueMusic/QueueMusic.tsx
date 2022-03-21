import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsQueueMusicProps } from './QueueMusic.types';

export const Component = (props: IconsQueueMusicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>queue_music</Default>;
};

export default {
  Component,
};
