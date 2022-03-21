import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRemoveFromQueueProps } from './RemoveFromQueue.types';

export const Component = (props: IconsRemoveFromQueueProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>remove_from_queue</Default>;
};

export default {
  Component,
};
