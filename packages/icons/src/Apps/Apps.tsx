import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAppsProps } from './Apps.types';

export const Component = (props: IconsAppsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>apps</Default>;
};

export default {
  Component,
};
