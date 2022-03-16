import * as React from 'react'
import { component as Button } from '../index'
import { ButtonLinkProps } from '../Link.types'

import { appearance } from './Link-appearance.stories'
import { size } from './Link-size.stories'
import { theme } from './Link-theme.stories'

export const Link = (args: ButtonLinkProps) => <Button {...args}>Hello World</Button>

Link.args = {
    appearance: 'Primary',
    size: 'Lg',
    theme: 'Default'
}

Link.argTypes = {
    appearance,
    size,
    theme
}