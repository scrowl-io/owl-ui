import * as React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TabsDefaultProps) => {
  const baseClass = 'owluiTabs';
  const { children, items } = props;
  const prefix = props.prefix || '';
  const defaultActiveKey = props.defaultActiveKey
    ? props.defaultActiveKey.toString()
    : items[0].id;

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'Theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size', 'tabs']
  );

  const [activeKey, setActiveKey] = React.useState<string>(defaultActiveKey);

  const selectTab = function (eventKey: string | number | null) {
    if (eventKey) {
      setActiveKey(eventKey.toString());
    }
  };

  return (
    <ThemeProvider
      prefixes={{
        nav: 'owlui-nav',
        'tab-content': 'owlui-tab-content',
        'nav-tabs': 'owlui-nav-tabs',
        'nav-item': 'owlui-nav-item',
        'nav-link': 'owlui-nav-link',
        tab: 'owlui-tab',
        'tab-pane': 'owlui-tab-pane',
      }}
    >
      <Tabs activeKey={activeKey} onSelect={selectTab} {...locals}>
        {items.map((item, index) => {
          return (
            <Tab
              className={activeKey === item.id ? 'owlui-active' : ''}
              key={item.id}
              eventKey={item.id}
              title={item.label}
            >
              {item.view}
            </Tab>
          );
        })}
      </Tabs>
    </ThemeProvider>
  );
};

export default {
  Component,
};
