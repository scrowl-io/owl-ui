import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCreateNewFolderProps } from './CreateNewFolder.types';

export const Component = (props: IconsCreateNewFolderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>create_new_folder</Default>;
};

export default {
  Component,
};
