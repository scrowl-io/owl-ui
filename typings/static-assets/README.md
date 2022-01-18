# Static Assets

## usage

The `static-assets` types are referenced by default. But if you added a component manually, add the following
to `tsconfig.json` `compilerOptions`:

```js
"typeRoots": [
    "../../node_modules/@types",
    "../../typings"
],
"types": [
    "static-assets"
    // and any other types you reference
]
```