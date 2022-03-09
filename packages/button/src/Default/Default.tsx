import * as React from 'react'
import { ButtonDefaultProps } from './Default.types'
import * as styles from './styles.module.scss'

const baseClass = 'owluiButtonDefault'

export const Component = (props: ButtonDefaultProps) => {
  const { children } = props

  let modulePrefix = props.prefix
  let theme = props.theme || 'Default'
  let appearance = props.appearance || 'Primary'
  let size = props.size || 'Md'

  let localStyles = {
    base: styles[baseClass],
    theme: styles[`${baseClass}Theme${theme}`],
    appearance: styles[`${baseClass}Theme${theme}${appearance}`],
    size: styles[`${baseClass}Size${size}`]
  }

  if (modulePrefix !== undefined && modulePrefix !== null) {
    localStyles.base = `${modulePrefix}-${localStyles.base}`
    localStyles.theme = `${modulePrefix}-${localStyles.theme}`
    localStyles.appearance = `${modulePrefix}-${localStyles.appearance}`
    localStyles.size = `${modulePrefix}-${localStyles.size}`
  }
  
  return <button
    className={[
      localStyles.base,
      localStyles.theme,
      localStyles.appearance,
      localStyles.size
    ].join(' ')}
  >{children}</button>
}

export default {
  Component
};