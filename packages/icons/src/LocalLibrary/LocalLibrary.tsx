import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalLibraryProps } from './LocalLibrary.types';

export const Component = (props: IconsLocalLibraryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_library</Default>;
};

export default {
  Component,
};
