import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDeleteForeverProps } from './DeleteForever.types';

export const Component = (props: IconsDeleteForeverProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>delete_forever</Default>;
};

export default {
  Component,
};
