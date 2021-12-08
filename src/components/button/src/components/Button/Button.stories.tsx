import * as React from 'react'
import { Meta } from '@storybook/react'
import { Button } from './Button'
import descriptionMd from './Description.md'

export { Default } from './stories/Button-default.stories'

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: [
                    descriptionMd
                ].join('/n')
            }
        }
    },
    decorators: [
        Story => (
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Story />
            </div>
        )
    ]
} as Meta