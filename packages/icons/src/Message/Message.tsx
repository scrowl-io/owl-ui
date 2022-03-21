import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMessageProps } from './Message.types';

export const Component = (props: IconsMessageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>message</Default>;
};

export default {
  Component,
};
