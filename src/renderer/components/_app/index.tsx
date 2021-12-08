import React from 'react'
import * as styles from './styles.module.scss'
import { Button } from '../../../components/button/src/components/Button/index'

const Page = () => {
    return (
        <div className={styles.container}>
            <header>Hello World</header>
            <Button label="Goodbye" appearance="primary" size="medium" />
        </div>
    )
}

export default Page