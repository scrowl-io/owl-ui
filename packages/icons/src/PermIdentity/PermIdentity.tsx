import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermIdentityProps } from './PermIdentity.types';

export const Component = (props: IconsPermIdentityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_identity</Default>;
};

export default {
  Component,
};
