export type DefaultButtonCommons = {
    appearance?: 'primary' | 'outline'
    theme?: 'default' | 'dark'
    size?: 'small' | 'medium' | 'large'
    children: any
}

export type DefaultButtonProps = Partial<DefaultButtonCommons>