import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChangeHistoryProps } from './ChangeHistory.types';

export const Component = (props: IconsChangeHistoryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>change_history</Default>;
};

export default {
  Component,
};
