import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHealingProps } from './Healing.types';

export const Component = (props: IconsHealingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>healing</Default>;
};

export default {
  Component,
};
