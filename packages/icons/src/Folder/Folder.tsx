import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFolderProps } from './Folder.types';

export const Component = (props: IconsFolderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>folder</Default>;
};

export default {
  Component,
};
