import * as React from 'react'
import { ButtonDefaultProps } from './Default.types'
import * as styleMod from './styles.module.scss'

const baseClass = 'owluiButton'

export const Component = (props: ButtonDefaultProps) => {
  const { children, className, style } = props

  let modulePrefix = props.prefix
  let theme = props.theme || 'Default'
  let appearance = props.appearance || 'Primary'
  let size = props.size || 'Md'

  let styleLocal = {
    base: styleMod[baseClass],
    theme: styleMod[`${baseClass}Theme${theme}`],
    appearance: styleMod[`${baseClass}Theme${theme}${appearance}`],
    size: styleMod[`${baseClass}Size${size}`]
  }

  if (modulePrefix !== undefined && modulePrefix !== null) {
    styleLocal.base = `${modulePrefix}-${styleLocal.base}`
    styleLocal.theme = `${modulePrefix}-${styleLocal.theme}`
    styleLocal.appearance = `${modulePrefix}-${styleLocal.appearance}`
    styleLocal.size = `${modulePrefix}-${styleLocal.size}`
  }
  
  return <button
    style={style}
    className={[
      className,
      styleLocal.base,
      styleLocal.theme,
      styleLocal.appearance,
      styleLocal.size
    ].join(' ')}
  >{children}</button>
}

export default {
  Component
};