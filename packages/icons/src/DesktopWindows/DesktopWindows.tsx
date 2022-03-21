import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDesktopWindowsProps } from './DesktopWindows.types';

export const Component = (props: IconsDesktopWindowsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>desktop_windows</Default>;
};

export default {
  Component,
};
