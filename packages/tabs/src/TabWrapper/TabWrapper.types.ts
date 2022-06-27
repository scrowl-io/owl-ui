import React from 'react';
import type { TabsDefaultProps } from '../Default/Default.types';

export interface TabWrapperCommons extends TabsDefaultProps {
  children: React.ReactNode;
}

export type TabTabWrapperProps = Partial<TabWrapperCommons>;
