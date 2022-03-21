import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChevronRightProps } from './ChevronRight.types';

export const Component = (props: IconsChevronRightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>chevron_right</Default>;
};

export default {
  Component,
};
