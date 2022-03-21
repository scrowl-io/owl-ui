import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReplay30Props } from './Replay30.types';

export const Component = (props: IconsReplay30Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>replay_30</Default>;
};

export default {
  Component,
};
