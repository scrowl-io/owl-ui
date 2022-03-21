import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGroupWorkProps } from './GroupWork.types';

export const Component = (props: IconsGroupWorkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>group_work</Default>;
};

export default {
  Component,
};
