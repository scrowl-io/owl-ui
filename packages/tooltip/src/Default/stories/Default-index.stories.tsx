import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { trigger } from './Default-trigger.stories';
import { popover } from './Default-popover.stories';

const DemoParagraphOne = () => (
  <p>This is a paragraph to demonstrate the use of the&nbsp;</p>
);

const DemoParagraphTwo = () => <p>. Wrap your tooltips in blocks of text.</p>;

export const Default = (args: TooltipDefaultProps) => {
  const placement = 'bottom';
  // const rootClose = true;
  const header = 'Popover Header';

  // const DemoPararaph = () => {
  //   return (
  //     <p>
  //       This is another paragraph. We should be able to splice tooltips into a
  //       single paragraph, {targetElement} rather than wrap them with many p
  //       elements.
  //     </p>
  //   );
  // };

  const targetElement = (props: object) => {
    return (
      <span
        id="popover-button"
        {...props}
        style={{
          fontWeight: '700',
          borderBottom: '3px solid black',
          marginBottom: '2em',
        }}
      >
        Tooltip/Popover
      </span>
    );
  };

  return (
    <>
      <DemoParagraphOne />
      <Tooltip
        {...args}
        header={header}
        placement={placement}
        // rootClose={rootClose}
        targetElement={targetElement}
      >
        <p>Inside the tooltip</p>
      </Tooltip>
      <DemoParagraphTwo />
      {/* <DemoPararaph /> */}
    </>
  );
};

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  trigger: trigger.defaultValue,
  popover: popover.defaultValue,
};

Default.argTypes = {
  size,
  theme,
  trigger,
  popover,
};
