import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermMediaProps } from './PermMedia.types';

export const Component = (props: IconsPermMediaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_media</Default>;
};

export default {
  Component,
};
