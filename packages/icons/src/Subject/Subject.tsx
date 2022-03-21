import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSubjectProps } from './Subject.types';

export const Component = (props: IconsSubjectProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>subject</Default>;
};

export default {
  Component,
};
