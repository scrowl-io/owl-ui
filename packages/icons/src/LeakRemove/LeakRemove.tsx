import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLeakRemoveProps } from './LeakRemove.types';

export const Component = (props: IconsLeakRemoveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>leak_remove</Default>;
};

export default {
  Component,
};
