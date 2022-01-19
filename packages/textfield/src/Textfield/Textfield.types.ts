export type TextfieldCommons = {
    appearance?: 'primary' | 'outline'
    theme?: 'dark'
    size: 'small' | 'medium' | 'large'
    children: any
}

export type TextfieldProps = Partial<TextfieldCommons>