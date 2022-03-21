import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoodBadProps } from './MoodBad.types';

export const Component = (props: IconsMoodBadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mood_bad</Default>;
};

export default {
  Component,
};
