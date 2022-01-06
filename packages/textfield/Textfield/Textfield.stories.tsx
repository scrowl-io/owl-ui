import * as React from 'react'
import { Meta } from '@storybook/react'
import { Textfield } from './Textfield'
import descriptionMd from './Description.md'

export { Default } from './stories/Textfield-default.stories'

export default {
    title: 'Components/Textfield',
    component: Textfield,
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