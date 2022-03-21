import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloudQueueProps } from './CloudQueue.types';

export const Component = (props: IconsCloudQueueProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cloud_queue</Default>;
};

export default {
  Component,
};
