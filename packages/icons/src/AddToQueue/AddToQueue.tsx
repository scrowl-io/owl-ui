import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddToQueueProps } from './AddToQueue.types';

export const Component = (props: IconsAddToQueueProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_to_queue</Default>;
};

export default {
  Component,
};
