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
import { createLocalProps } from '@owlui/lib/src/utils';
import { Component as NavHeader } from './elements/Header';
import { Component as NavContent } from './elements/Content';

export const Component = (props: NavigationDrawerElementProps) => {
  const baseClass = 'navigationDrawer';
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

  const Header = header ? <NavHeader>{header}</NavHeader> : '';
  const Content = items ? <NavContent items={items} /> : '';

  return (
    <>
      <ThemeProvider>
        {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map(expand => ( */}
        <Navbar bg="light" expand className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
            <Navbar.Offcanvas
              // id={`offcanvasNavbar-expand-${expand}`}
              // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-$`}
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
};

export default {
  Component,
};
