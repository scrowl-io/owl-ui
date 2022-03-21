import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDomainProps } from './Domain.types';

export const Component = (props: IconsDomainProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>domain</Default>;
};

export default {
  Component,
};
