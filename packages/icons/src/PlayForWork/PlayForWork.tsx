import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlayForWorkProps } from './PlayForWork.types';

export const Component = (props: IconsPlayForWorkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>play_for_work</Default>;
};

export default {
  Component,
};
