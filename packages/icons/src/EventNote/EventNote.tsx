import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEventNoteProps } from './EventNote.types';

export const Component = (props: IconsEventNoteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>event_note</Default>;
};

export default {
  Component,
};
