import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAdbProps } from './Adb.types';

export const Component = (props: IconsAdbProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>adb</Default>;
};

export default {
  Component,
};
