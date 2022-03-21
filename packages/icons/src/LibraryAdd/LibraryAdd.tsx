import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLibraryAddProps } from './LibraryAdd.types';

export const Component = (props: IconsLibraryAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>library_add</Default>;
};

export default {
  Component,
};
