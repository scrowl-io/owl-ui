import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFolderSharedProps } from './FolderShared.types';

export const Component = (props: IconsFolderSharedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>folder_shared</Default>;
};

export default {
  Component,
};
