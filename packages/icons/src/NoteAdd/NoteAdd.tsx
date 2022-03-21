import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNoteAddProps } from './NoteAdd.types';

export const Component = (props: IconsNoteAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>note_add</Default>;
};

export default {
  Component,
};
