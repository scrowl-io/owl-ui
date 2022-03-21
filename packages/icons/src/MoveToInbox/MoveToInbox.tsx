import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoveToInboxProps } from './MoveToInbox.types';

export const Component = (props: IconsMoveToInboxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>move_to_inbox</Default>;
};

export default {
  Component,
};
