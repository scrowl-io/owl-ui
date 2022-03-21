import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewModuleProps } from './ViewModule.types';

export const Component = (props: IconsViewModuleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_module</Default>;
};

export default {
  Component,
};
