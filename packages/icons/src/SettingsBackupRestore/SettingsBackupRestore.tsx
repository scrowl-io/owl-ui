import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsBackupRestoreProps } from './SettingsBackupRestore.types';

export const Component = (props: IconsSettingsBackupRestoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_backup_restore</Default>;
};

export default {
  Component,
};
