export type ButtonCommons = {
    appearance?: 'primary' | 'outline'
    size: 'small' | 'medium' | 'large'
    label: string
}

export type ButtonProps = Partial<ButtonCommons>