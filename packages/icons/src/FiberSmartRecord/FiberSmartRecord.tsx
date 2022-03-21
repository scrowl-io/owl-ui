import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFiberSmartRecordProps } from './FiberSmartRecord.types';

export const Component = (props: IconsFiberSmartRecordProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fiber_smart_record</Default>;
};

export default {
  Component,
};
