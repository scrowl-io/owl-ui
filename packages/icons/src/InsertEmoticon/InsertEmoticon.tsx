import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInsertEmoticonProps } from './InsertEmoticon.types';

export const Component = (props: IconsInsertEmoticonProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>insert_emoticon</Default>;
};

export default {
  Component,
};
