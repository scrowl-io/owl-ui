import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTextFieldsProps } from './TextFields.types';

export const Component = (props: IconsTextFieldsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>text_fields</Default>;
};

export default {
  Component,
};
