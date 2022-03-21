import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterCenterFocusProps } from './FilterCenterFocus.types';

export const Component = (props: IconsFilterCenterFocusProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_center_focus</Default>;
};

export default {
  Component,
};
