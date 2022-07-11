import React from 'react';

export const navItems = [
  {
    as: 'li',
    navLink: {
      eventKey: 'link-1',
      label: <>Home</>,
      href: '/home',
      disabled: false,
    },
  },
  {
    as: 'li',
    navLink: {
      eventKey: 'link-2',
      label: <>About</>,
      href: '/about',
      disabled: false,
    },
  },
  {
    as: 'li',
    navLink: {
      eventKey: 'link-3',
      label: <>Blog</>,
      href: '/blog',
      disabled: false,
    },
  },
  {
    as: 'li',
    navLink: {
      eventKey: 'link-4',
      label: <>Disabled</>,
      href: '/disabled',
      disabled: true,
    },
  },
];
