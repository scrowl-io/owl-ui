import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSyncProblemProps } from './SyncProblem.types';

export const Component = (props: IconsSyncProblemProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sync_problem</Default>;
};

export default {
  Component,
};
