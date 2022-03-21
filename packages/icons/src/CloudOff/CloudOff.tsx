import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloudOffProps } from './CloudOff.types';

export const Component = (props: IconsCloudOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cloud_off</Default>;
};

export default {
  Component,
};
