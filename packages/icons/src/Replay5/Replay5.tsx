import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReplay5Props } from './Replay5.types';

export const Component = (props: IconsReplay5Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>replay_5</Default>;
};

export default {
  Component,
};
