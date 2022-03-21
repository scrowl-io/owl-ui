import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPregnantWomanProps } from './PregnantWoman.types';

export const Component = (props: IconsPregnantWomanProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pregnant_woman</Default>;
};

export default {
  Component,
};
