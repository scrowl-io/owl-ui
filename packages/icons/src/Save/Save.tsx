import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSaveProps } from './Save.types';

export const Component = (props: IconsSaveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>save</Default>;
};

export default {
  Component,
};
