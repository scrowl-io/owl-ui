export type DefaultTextfieldCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: JSX.Element | JSX.Element[]
}

export type DefaultTextfieldProps = Partial<DefaultTextfieldCommons>