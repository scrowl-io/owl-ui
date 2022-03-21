import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalMallProps } from './LocalMall.types';

export const Component = (props: IconsLocalMallProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_mall</Default>;
};

export default {
  Component,
};
