import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSyncProps } from './Sync.types';

export const Component = (props: IconsSyncProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sync</Default>;
};

export default {
  Component,
};
