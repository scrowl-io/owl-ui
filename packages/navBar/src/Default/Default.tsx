import React, { useEffect, useState } from 'react';
import {
  ThemeProvider,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { NavBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: NavBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'navbar';
  const { variant, linkColor } = props;
  const prefix = props.prefix || '';
  const [expand, setExpand] = useState(true);

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
    ['prefix', 'theme', 'size']
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setExpand(false);
      } else {
        setExpand(true);
      }
    }

    window.addEventListener('resize', handleResize);
  });

  themePrefixes['navbar-brand'] = `owlui-navbar-brand`;
  themePrefixes['basic-navbar-nav'] = `owlui-navbar-basic-navbar-nav`;
  themePrefixes['navbar-toggler'] = 'owlui-navbar-toggler';
  themePrefixes['navbar-toggler-icon'] = `owlui-navbar-toggler-icon`;
  themePrefixes['navbar-nav'] = `owlui-navbar-nav`;
  themePrefixes['dropdown-toggle'] = `owlui-dropdown-toggle`;
  themePrefixes['nav-link'] = `owlui-nav-link`;
  themePrefixes['nav-item'] = `owlui-nav-item`;
  themePrefixes['basic-nav-dropdown'] = `owlui-basic-nav-dropdown`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Navbar
        bg={variant}
        variant={linkColor}
        bsPrefix="navbar"
        expand={expand}
      >
        <Container>
          <Navbar.Brand {...locals} href="#home">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {' '}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ThemeProvider>
  );
};

export default {
  Component,
};
