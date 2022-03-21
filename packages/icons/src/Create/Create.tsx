import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCreateProps } from './Create.types';

export const Component = (props: IconsCreateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>create</Default>;
};

export default {
  Component,
};
