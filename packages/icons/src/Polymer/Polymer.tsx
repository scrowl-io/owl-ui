import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPolymerProps } from './Polymer.types';

export const Component = (props: IconsPolymerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>polymer</Default>;
};

export default {
  Component,
};
