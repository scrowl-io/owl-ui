import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSystemUpdateProps } from './SystemUpdate.types';

export const Component = (props: IconsSystemUpdateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>system_update</Default>;
};

export default {
  Component,
};
