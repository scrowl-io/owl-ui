import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsModeEditProps } from './ModeEdit.types';

export const Component = (props: IconsModeEditProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mode_edit</Default>;
};

export default {
  Component,
};
