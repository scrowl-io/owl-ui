import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderClearProps } from './BorderClear.types';

export const Component = (props: IconsBorderClearProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_clear</Default>;
};

export default {
  Component,
};
