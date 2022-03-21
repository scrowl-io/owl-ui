import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhonelinkRingProps } from './PhonelinkRing.types';

export const Component = (props: IconsPhonelinkRingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phonelink_ring</Default>;
};

export default {
  Component,
};
