export type ButtonCommons = {
    appearance?: 'primary' | 'outline'
    theme?: 'dark'
    size?: 'small' | 'medium' | 'large'
    children: any
}

export type ButtonProps = Partial<ButtonCommons>