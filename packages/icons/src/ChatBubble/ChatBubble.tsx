import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChatBubbleProps } from './ChatBubble.types';

export const Component = (props: IconsChatBubbleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>chat_bubble</Default>;
};

export default {
  Component,
};
