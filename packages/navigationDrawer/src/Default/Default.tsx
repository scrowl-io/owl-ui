import * as React from 'react';
import { NavigationDrawerElementProps } from './Default.types';
import {
  ThemeProvider,
  FormControl,
  Form,
  Button,
  Offcanvas,
  Navbar,
  NavDropdown,
  Container,
  Nav,
} from 'react-bootstrap';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';
import { Component as NavHeader } from './elements/Header';
import { Component as NavContent } from './elements/Content';

export const Component = (props: NavigationDrawerElementProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'navbar';
  const { header, items } = props;
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
            fields: ['appearance'],
            value: 'Appearance',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'appearance', 'theme', 'size', 'header', 'items']
  );

  themePrefixes['navbar-toggler'] = `owlui-navbar-toggler`;
  themePrefixes['navbar-nav'] = `owlui-navbar-nav`;
  themePrefixes['offcanvas-header'] = `owlui-offcanvas-header`;
  themePrefixes['offcanvas-body'] = `owlui-offcanvas-body`;

  themePrefixes['offcanvas'] = `owlui-offcanvas`;
  themePrefixes['offcanvas-end'] = `owlui-offcanvas-end`;

  themePrefixes['navbar-toggler-icon'] = `owlui-navbar-toggler-icon`;
  themePrefixes['nav-link'] = 'owlui-nav-link';
  themePrefixes['basic-nav-dropdown'] = `owlui-basic-nav-dropdown`;
  themePrefixes['offcanvas-title'] = `owlui-offcanvas-title`;

  themePrefixes['navbar-brand'] = `owlui-navbar-brand`;
  themePrefixes['basic-navbar-nav'] = `owlui-basic-navbar-nav`;

  themePrefixes['dropdown-toggle'] = `owlui-dropdown-toggle`;
  themePrefixes['dropdown'] = `owlui-dropdown`;

  return (
    <>
      <ThemeProvider prefixes={themePrefixes}>
        <Navbar {...locals} bg="light" expand="false" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-false`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>

                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* ))} */}
      </ThemeProvider>
    </>
  );
};;

export default {
  Component,
};
