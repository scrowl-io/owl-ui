import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTrainProps } from './Train.types';

export const Component = (props: IconsTrainProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>train</Default>;
};

export default {
  Component,
};
