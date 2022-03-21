import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStraightenProps } from './Straighten.types';

export const Component = (props: IconsStraightenProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>straighten</Default>;
};

export default {
  Component,
};
