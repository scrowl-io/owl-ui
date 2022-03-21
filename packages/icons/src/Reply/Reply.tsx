import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReplyProps } from './Reply.types';

export const Component = (props: IconsReplyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>reply</Default>;
};

export default {
  Component,
};
