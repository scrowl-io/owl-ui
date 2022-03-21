import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssistantProps } from './Assistant.types';

export const Component = (props: IconsAssistantProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assistant</Default>;
};

export default {
  Component,
};
