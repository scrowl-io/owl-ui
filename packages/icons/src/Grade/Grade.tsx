import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGradeProps } from './Grade.types';

export const Component = (props: IconsGradeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>grade</Default>;
};

export default {
  Component,
};
