import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGetAppProps } from './GetApp.types';

export const Component = (props: IconsGetAppProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>get_app</Default>;
};

export default {
  Component,
};
