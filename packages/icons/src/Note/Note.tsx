import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNoteProps } from './Note.types';

export const Component = (props: IconsNoteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>note</Default>;
};

export default {
  Component,
};
