import * as React from 'react'
import { Component as Default } from '../Default/Default'
import { ButtonLinkProps } from './Link.types'
import * as styles from './styles.module.scss'

const baseClass = 'owluiButtonLink'

export const Component = (props: ButtonLinkProps) => {
  const { children } = props
  const localProps = Object.assign({}, props)
  
  localProps.className = localProps.hasOwnProperty('className') ? `${styles[baseClass]} ${localProps.className}` : styles[baseClass]

  return <Default
    {...localProps}
  >{children}</Default>
}

export default {
    Component
};