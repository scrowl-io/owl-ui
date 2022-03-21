import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDeveloperModeProps } from './DeveloperMode.types';

export const Component = (props: IconsDeveloperModeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>developer_mode</Default>;
};

export default {
  Component,
};
