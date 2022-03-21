import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhonePausedProps } from './PhonePaused.types';

export const Component = (props: IconsPhonePausedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_paused</Default>;
};

export default {
  Component,
};
