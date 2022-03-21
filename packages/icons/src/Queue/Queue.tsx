import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsQueueProps } from './Queue.types';

export const Component = (props: IconsQueueProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>queue</Default>;
};

export default {
  Component,
};
