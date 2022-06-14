import * as React from 'react';
import { Nav, Row, ThemeProvider } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TabsDefaultProps) => {
  const baseClass = 'owluiTabs';
  const activeClass = 'owlui-active';
  const { items } = props;
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
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size', 'items', 'selectedItemId']
  );

  const [activeKey, setActiveKey] = React.useState<string>(
    defaultActiveKey as string
  );

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
      <Row>
        <Tab.Container activeKey={activeKey} onSelect={selectTab} {...locals}>
          <Nav variant="tabs">
            {items.map(item => {
              return (
                <Nav.Item key={item.id}>
                  <Nav.Link
                    eventKey={item.id}
                    className={activeKey === item.id ? activeClass : ''}
                  >
                    {item.label}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
          <Tab.Content>
            {items.map(item => {
              return (
                <Tab.Pane
                  className={activeKey === item.id ? activeClass : ''}
                  key={item.id}
                  eventKey={item.id}
                  title={item.label}
                >
                  {item.view}
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Tab.Container>
      </Row>
    </ThemeProvider>
  );
};

export default {
  Component,
};
