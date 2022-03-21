import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNavigateBeforeProps } from './NavigateBefore.types';

export const Component = (props: IconsNavigateBeforeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>navigate_before</Default>;
};

export default {
  Component,
};
