import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFiberManualRecordProps } from './FiberManualRecord.types';

export const Component = (props: IconsFiberManualRecordProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fiber_manual_record</Default>;
};

export default {
  Component,
};
