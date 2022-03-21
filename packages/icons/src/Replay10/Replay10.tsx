import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReplay10Props } from './Replay10.types';

export const Component = (props: IconsReplay10Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>replay_10</Default>;
};

export default {
  Component,
};
