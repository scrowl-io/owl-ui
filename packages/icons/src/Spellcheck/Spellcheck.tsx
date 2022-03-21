import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpellcheckProps } from './Spellcheck.types';

export const Component = (props: IconsSpellcheckProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>spellcheck</Default>;
};

export default {
  Component,
};
