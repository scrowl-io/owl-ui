import React from 'react';
import type { TabsDefaultProps } from '../Default/Default.types';

export interface TabButtonCommons extends TabsDefaultProps {
  children: React.ReactNode;
}

export type TabTabButtonProps = Partial<TabButtonCommons>;
