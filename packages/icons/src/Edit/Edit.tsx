import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEditProps } from './Edit.types';

export const Component = (props: IconsEditProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>edit</Default>;
};

export default {
  Component,
};
