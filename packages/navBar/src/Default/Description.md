## Overview

A navigation heade, used for navigation.

## Accessibility

The ARIA role for the navbar, will default to 'navigation' for Navbars whose as is something other than <nav>.

## Props

For more details on the props available for this component, see the [Navbar React Bootstrap Documentation]: https://react-bootstrap.github.io/components/navbar/#navbar-props

## Usage

Can be used for navigation, supported branded headers

### Basic Default

```jsx
import { Default as DefaultNavBar } from `@owlui/navbar`;

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
```
