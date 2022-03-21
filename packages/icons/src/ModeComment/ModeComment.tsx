import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsModeCommentProps } from './ModeComment.types';

export const Component = (props: IconsModeCommentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mode_comment</Default>;
};

export default {
  Component,
};
