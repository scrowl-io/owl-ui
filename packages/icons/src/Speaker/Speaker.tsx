import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpeakerProps } from './Speaker.types';

export const Component = (props: IconsSpeakerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>speaker</Default>;
};

export default {
  Component,
};
