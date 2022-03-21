import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAdjustProps } from './Adjust.types';

export const Component = (props: IconsAdjustProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>adjust</Default>;
};

export default {
  Component,
};
