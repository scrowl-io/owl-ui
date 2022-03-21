import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalFloristProps } from './LocalFlorist.types';

export const Component = (props: IconsLocalFloristProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_florist</Default>;
};

export default {
  Component,
};
