import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMarkunreadMailboxProps } from './MarkunreadMailbox.types';

export const Component = (props: IconsMarkunreadMailboxProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>markunread_mailbox</Default>;
};

export default {
  Component,
};
