import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInboxProps } from './Inbox.types';

export const Component = (props: IconsInboxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>inbox</Default>;
};

export default {
  Component,
};
