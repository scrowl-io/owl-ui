export type TextfieldCommons = {
    appearance?: 'primary' | 'outline'
    size: 'small' | 'medium' | 'large'
    children: any
}

export type TextfieldProps = Partial<TextfieldCommons>