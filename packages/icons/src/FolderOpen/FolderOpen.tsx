import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFolderOpenProps } from './FolderOpen.types';

export const Component = (props: IconsFolderOpenProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>folder_open</Default>;
};

export default {
  Component,
};
