import React from 'react'
import * as jsxRuntime from 'react/jsx-runtime'
import ReactDOM from 'react-dom'

export function getMDXComponent(code, globals) {
  return getMDXExport(code, globals).default
}

export function getMDXExport(code, globals) {
  const scope = {
    React,
    ReactDOM,
    _jsx_runtime: jsxRuntime,
    ...globals,
  }

  const fn = new Function(...Object.keys(scope), code)
  return fn(...Object.values(scope))
}
