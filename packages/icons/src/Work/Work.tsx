import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWorkProps } from './Work.types';

export const Component = (props: IconsWorkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>work</Default>;
};

export default {
  Component,
};
