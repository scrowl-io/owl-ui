export type ButtonCommons = {
    appearance?: 'primary' | 'outline'
    size: 'small' | 'medium' | 'large'
    children: any
}

export type ButtonProps = Partial<ButtonCommons>