import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTuneProps } from './Tune.types';

export const Component = (props: IconsTuneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tune</Default>;
};

export default {
  Component,
};
