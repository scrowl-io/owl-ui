import * as React from 'react';
import { ThemeProvider } from 'react-bootstrap';
// import { Component as Test } from '../Test/Test';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabPane from 'react-bootstrap/TabPane';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const items = [
  {
    id: 1,
    label: 'label 1',
    view: 'content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    label: 'label 2',
    view: 'content 2 - Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  },
  {
    id: 3,
    label: 'label 3',
    view: 'content 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
];

export const Component = (props: TabsDefaultProps) => {
  const baseClass = 'tabs';
  const { children } = props;
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

  // const bsPrefixes = {
  //   [`${baseClass}`]: `${basePrefixClass}-card`,
  // };

  // const [selected, setSelected] = React.useState(0);
  const [key, setKey] = React.useState('home');

  const tabPane = document.getElementById(
    'uncontrolled-tab-example-tabpane-profile'
  );

  const handleSelect = () => {
    tabPane?.classList.remove('tab-pane');
    tabPane?.classList.add('owl-ui-tab-pane');
  };

  return (
    <ThemeProvider
      prefixes={{
        nav: 'owlui-nav',
        'tab-content': 'owlui-tab-content',
        fade: 'owlui-fade',
        show: 'owlui-show',
        active: 'owlui-active',
        'nav-tabs': 'owlui-nav-tabs',
        'nav-item': 'owlui-nav-item',
        'nav-link': 'owlui-nav-link',
        tab: 'owlui-tab',
        'tab-pane': 'owlui-tab-pane',
      }}
    >
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        // onClick={handleSelect}
        {...locals}
      >
        <Tab eventKey="home" title="Home">
          1
        </Tab>
        <Tab eventKey="profile" title="Profile">
          2
        </Tab>
        <Tab eventKey="contact" title="Contact">
          3
        </Tab>
      </Tabs>

      {/* <Tabs
          defaultActiveKey={0}
          id="uncontrolled-tab-example"
          {...locals}
          className="mb-3"
        >
          {items.map((item, index) => {
            return (
              <Tab
                // className={`${item.id === selected ? 'active ' : ' '}p-3`}
                eventKey={index}
                title={item.label}
                // onClick={() => setSelected(item.id)}
                key={item.id}
              >
                Hello
              </Tab>
            );
          })}
        </Tabs> */}
    </ThemeProvider>
  );

  // return <div {...locals}>{children}</div>;
};

export default {
  Component,
};
