import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScannerProps } from './Scanner.types';

export const Component = (props: IconsScannerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>scanner</Default>;
};

export default {
  Component,
};
