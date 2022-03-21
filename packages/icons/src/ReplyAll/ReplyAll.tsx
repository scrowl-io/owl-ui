import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReplyAllProps } from './ReplyAll.types';

export const Component = (props: IconsReplyAllProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>reply_all</Default>;
};

export default {
  Component,
};
