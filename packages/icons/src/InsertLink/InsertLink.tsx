import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInsertLinkProps } from './InsertLink.types';

export const Component = (props: IconsInsertLinkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>insert_link</Default>;
};

export default {
  Component,
};
