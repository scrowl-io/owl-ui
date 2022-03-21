import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSendProps } from './Send.types';

export const Component = (props: IconsSendProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>send</Default>;
};

export default {
  Component,
};
