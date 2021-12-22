import React from 'react'
import * as styles from './styles.module.scss'
import { Button } from '../../../components/button/src/components/Button/index'

export const route = '/'

export const Page = () => {
    return (
        <div className={styles.container}>
            <header>Owl UI Components</header>
            <Button appearance="primary" size="large">Default Button</Button>
        </div>
    )
}

export default {
    route,
    Page
}