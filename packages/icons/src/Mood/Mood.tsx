import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoodProps } from './Mood.types';

export const Component = (props: IconsMoodProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mood</Default>;
};

export default {
  Component,
};
