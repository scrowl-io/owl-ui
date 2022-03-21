import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNavigateNextProps } from './NavigateNext.types';

export const Component = (props: IconsNavigateNextProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>navigate_next</Default>;
};

export default {
  Component,
};
