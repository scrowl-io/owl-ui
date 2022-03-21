import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallProps } from './Call.types';

export const Component = (props: IconsCallProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call</Default>;
};

export default {
  Component,
};
