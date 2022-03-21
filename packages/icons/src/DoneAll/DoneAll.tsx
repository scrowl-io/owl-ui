import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDoneAllProps } from './DoneAll.types';

export const Component = (props: IconsDoneAllProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>done_all</Default>;
};

export default {
  Component,
};
