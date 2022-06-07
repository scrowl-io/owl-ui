import type { TabsDefaultProps } from '../Default/Default.types';

export interface TabCommons extends TabsDefaultProps {
  children: React.ReactNode;
}

export type TabProps = Partial<TabCommons>;
