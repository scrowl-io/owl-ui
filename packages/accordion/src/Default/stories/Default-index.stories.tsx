import * as React from 'react';
import { component as Accordion } from '../index';
import { AccordionDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const items = [
  {
    id: '1',
    label: 'Header 1',
    view: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        diam eu enim posuere malesuada. Nullam felis nulla, tempus quis lacus
        sed, mollis gravida orci. Nullam turpis justo, suscipit id pretium ut,
        dictum at tellus. Sed facilisis dui nisl, quis blandit enim bibendum sit
        amet. Vestibulum id tortor a lacus suscipit vulputate. Donec et felis
        nisl. Proin id justo semper, venenatis nulla egestas, bibendum velit.
        Vivamus volutpat, mi eget bibendum cursus, velit tortor pellentesque
        ipsum, vitae maximus augue nunc at turpis. Cras vel nisi dolor. Duis mi
        risus, malesuada a magna nec, molestie varius metus. Duis eget gravida
        erat. Quisque hendrerit in augue at interdum. Fusce nec luctus sem, eu
        aliquam lorem.
      </p>
    ),
  },
  {
    id: '2',
    label: 'Header 2',
    view: (
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <label>
          Country:
          <input type="text" name="country" />
        </label>
        <label>
          City:
          <input type="text" name="city" />
        </label>
      </form>
    ),
  },
  {
    id: '3',
    label: 'Header 3',
    view: (
      <div>
        <h2>Build out custom content</h2>
        <img
          style={{ width: '30%' }}
          src="https://osg.ca/wp-content/uploads/2021/12/greenbook_transparent.png"
          alt="green book by OSG"
        />
      </div>
    ),
  },
];

export const Default = (args: AccordionDefaultProps) => <Accordion {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  items: items,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
