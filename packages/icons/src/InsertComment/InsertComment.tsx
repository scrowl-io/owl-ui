import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInsertCommentProps } from './InsertComment.types';

export const Component = (props: IconsInsertCommentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>insert_comment</Default>;
};

export default {
  Component,
};
