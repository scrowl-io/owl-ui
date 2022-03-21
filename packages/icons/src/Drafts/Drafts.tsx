import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDraftsProps } from './Drafts.types';

export const Component = (props: IconsDraftsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>drafts</Default>;
};

export default {
  Component,
};
