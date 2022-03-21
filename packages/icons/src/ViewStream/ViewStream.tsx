import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewStreamProps } from './ViewStream.types';

export const Component = (props: IconsViewStreamProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_stream</Default>;
};

export default {
  Component,
};
