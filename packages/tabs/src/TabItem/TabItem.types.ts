import React from 'react';
import type { TabsDefaultProps } from '../Default/Default.types';

export interface TabItemCommons extends TabsDefaultProps {
  children: React.ReactNode;
}

export type TabTabItemProps = Partial<TabItemCommons>;
