import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChatProps } from './Chat.types';

export const Component = (props: IconsChatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>chat</Default>;
};

export default {
  Component,
};
