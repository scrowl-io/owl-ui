import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCommentProps } from './Comment.types';

export const Component = (props: IconsCommentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>comment</Default>;
};

export default {
  Component,
};
