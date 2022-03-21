import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChromeReaderModeProps } from './ChromeReaderMode.types';

export const Component = (props: IconsChromeReaderModeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>chrome_reader_mode</Default>;
};

export default {
  Component,
};
