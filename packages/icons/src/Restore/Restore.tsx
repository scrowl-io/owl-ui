import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRestoreProps } from './Restore.types';

export const Component = (props: IconsRestoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>restore</Default>;
};

export default {
  Component,
};
