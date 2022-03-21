import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBackupProps } from './Backup.types';

export const Component = (props: IconsBackupProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>backup</Default>;
};

export default {
  Component,
};
