import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewAgendaProps } from './ViewAgenda.types';

export const Component = (props: IconsViewAgendaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_agenda</Default>;
};

export default {
  Component,
};
