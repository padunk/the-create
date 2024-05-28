export const GENERAL_FLAG = {
  '--git': Boolean,
  '--help': Boolean,
  '--version': Boolean,
  '--package-manager': String,
  '--framework': String,
  '--template': String,
}

export const ALIASES = {
  '-g': '--git',
  '-h': '--help',
  '-v': '--version',
  '--fw': '--framework',
  '--pm': '--package-manager',
}

export const HELP_MANUAL = `
usage: thecreate [-h | --help] [-v | --version] [<app name>] [-g | --git] 
       [--package-manager=<package manager>] [--framework=<framework>] [--template=<template name>]

general flag:
  git       : initialize git in your app

package manager:
  bun       : Run with bun
  npm       : Run with npm
  pnpm      : Run with pnpm
  yarn      : Run with yarn

framework/library: make sure you have any global packages/cli:
  angular   : Create Angular project
  astro     : Create Astro project
  million   : Integrate MillionJS to your project
  next      : Create Next project
  nuxt      : Create Nuxt project
  preact    : Create Preact project
  qwik      : Create Qwik project
  redwood   : Create Redwood project
  remix     : Create Remix project
  solid     : Create SolidStart project
  svelte    : Create Svelte project
  vite      : Create Vite based project
  vue       : Create Vue project

`
// [vite custom template]
// tanning   : create React Tanning project

export const PACKAGE_MANAGER = {
  '--bun': 'bun',
  '--npm': 'npm',
  '--pnpm': 'pnpm',
  '--yarn': 'yarn',
}

export const VITE_TEMPLATES = [
  'vanilla',
  'vanilla-ts',
  'vue',
  'vue-ts',
  'react',
  'react-ts',
  'react-swc',
  'react-swc-ts',
  'preact',
  'preact-ts',
  'svelte',
  'svelte-ts',
  'solid',
  'solid-ts',
  'qwik',
  'qwik-ts',
]

export const DEFAULT_VITE_TEMPLATE = 'vanilla'
export const DEFAULT_APP_NAME = 'my-app'

export const FRAMEWORK = {
  '--angular': 'angular',
  '--astro': 'astro',
  '--million': 'million',
  '--next': 'next',
  '--nuxt': 'nuxt',
  '--preact': 'preact',
  '--qwik': 'qwik',
  '--redwood': 'redwood',
  '--remix': 'remix',
  '--solid': 'solid',
  '--svelte': 'svelte',
  '--vite': 'vite',
  '--vue': 'vue',
}
