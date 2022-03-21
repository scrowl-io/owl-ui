import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLiveHelpProps } from './LiveHelp.types';

export const Component = (props: IconsLiveHelpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>live_help</Default>;
};

export default {
  Component,
};
