import * as DefaultTabs from './Default/index';
import * as TabTabs from './Tab/index';
import * as TestTabs from './Test/index';

export const Default = DefaultTabs.component;
export const DefaultTypes = DefaultTabs.types;
export const Tab = TabTabs.component;
export const TabTypes = TabTabs.types;
export const Test = TestTabs.component;
export const TestTypes = TestTabs.types;

export default {
  Default,
  DefaultTypes,
  Tab,
  TabTypes,
  Test,
  TestTypes,
};
