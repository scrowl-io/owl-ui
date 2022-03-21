import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPollProps } from './Poll.types';

export const Component = (props: IconsPollProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>poll</Default>;
};

export default {
  Component,
};
