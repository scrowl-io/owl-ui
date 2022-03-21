import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallEndProps } from './CallEnd.types';

export const Component = (props: IconsCallEndProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_end</Default>;
};

export default {
  Component,
};
