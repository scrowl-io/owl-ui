# Overview

The card component provides a flexible and extensible container for displaying content.

## Content Types

Click on each component to visit the Bootstrap docs and check out the complete list of available props:

- [`<Card>`](https://react-bootstrap.github.io/components/cards/#card-props)
- [`<CardBody>`](https://react-bootstrap.github.io/components/cards/#card-body-props)
- [`<CardFooter>`](https://react-bootstrap.github.io/components/cards/#card-footer-props)
- [`<CardHeader>`](https://react-bootstrap.github.io/components/cards/#card-header-props)
- [`<CardImg>`](https://react-bootstrap.github.io/components/cards/#card-img-props)
- [`<CardImgOverlay>`](https://react-bootstrap.github.io/components/cards/#card-img-overlay-props)
- [`<CardLink>`](https://react-bootstrap.github.io/components/cards/#card-link-props)
- [`<CardSubTitle>`](https://react-bootstrap.github.io/components/cards/#card-subtitle-props)
- [`<CardText>`](https://react-bootstrap.github.io/components/cards/#card-text-props)
- [`<CardTitle>`](https://react-bootstrap.github.io/components/cards/#card-title-props)

## Examples

### Card with image on top:

```jsx
<Card style={{ width: '50%' }}>
  <CardImg variant="top" src="placeholder.jpg" />
  <CardBody>
    <CardTitle>Cash Handling Safety</CardTitle>
    <CardText>
      Workplaces that carry cash are at risk of theft. This course teaches you
      best practices in working safely with cash, including risk
      assessment,policies, and theft prevention.
    </CardText>
    <Button variant="primary">Add To Cart</Button>
  </CardBody>
</Card>
```

### Card with image overlay:

```jsx
<Card style={{ width: '50%' }}>
  <CardImg variant="top" src="placeholder.jpg" />
  <CardImgOverlay>
    <CardBody>
      <CardTitle>Cash Handling Safety</CardTitle>
      <CardText>
        Workplaces that carry cash are at risk of theft. This course teaches you
        best practices in working safely with cash, including risk assessment,
        policies, and theft prevention.
      </CardText>
      <Button variant="primary">Add To Cart</Button>
    </CardBody>
  </CardImgOverlay>
</Card>
```

### Card content using List Group:

```jsx
<Card style={{ width: '50%' }}>
  <CardHeader>Featured</CardHeader>
  <CardListGroup variant="flush">
    <CardListItem>Bear Awareness</CardListItem>
    <CardListItem>Cash Handling Safety</CardListItem>
    <CardListItem>Canada Labour Code</CardListItem>
  </CardListGroup>
</Card>
```
