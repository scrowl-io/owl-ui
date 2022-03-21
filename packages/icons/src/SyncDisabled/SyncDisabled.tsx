import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSyncDisabledProps } from './SyncDisabled.types';

export const Component = (props: IconsSyncDisabledProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sync_disabled</Default>;
};

export default {
  Component,
};
