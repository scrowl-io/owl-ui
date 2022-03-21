import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDoneProps } from './Done.types';

export const Component = (props: IconsDoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>done</Default>;
};

export default {
  Component,
};
