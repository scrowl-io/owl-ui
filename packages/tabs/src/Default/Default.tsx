import React, { useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TabsDefaultProps) => {
  const baseClass = 'owluiTabs';
  const { defaultActiveKey, items } = props;
  const prefix = props.prefix || '';

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
            value: 'theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size', 'tabs', 'items']
  );

  const [activeKey, setActiveKey] = useState<string | null>(defaultActiveKey as string);

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
      <Tabs
        activeKey={activeKey as string}
        onSelect={(k: string | null) => {
          setActiveKey(k);
        }}
        {...locals}
      >
        {items.map((item) => {
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
