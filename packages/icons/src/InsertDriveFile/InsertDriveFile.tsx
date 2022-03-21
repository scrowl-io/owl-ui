import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInsertDriveFileProps } from './InsertDriveFile.types';

export const Component = (props: IconsInsertDriveFileProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>insert_drive_file</Default>;
};

export default {
  Component,
};
