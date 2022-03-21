import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChatBubbleOutlineProps } from './ChatBubbleOutline.types';

export const Component = (props: IconsChatBubbleOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>chat_bubble_outline</Default>;
};

export default {
  Component,
};
