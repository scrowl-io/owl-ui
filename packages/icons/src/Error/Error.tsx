import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsErrorProps } from './Error.types';

export const Component = (props: IconsErrorProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>error</Default>;
};

export default {
  Component,
};
