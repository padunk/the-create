export const GENERAL_FLAG = {
  '--git': Boolean,
  '--help': Boolean,
  '--version': Boolean,
}

export const ALIASES = {
  '-g': '--git',
  '-h': '--help',
  '-v': '--version',
}

export const HELP_MANUAL = `
thecreate --help
thecreate --version
thecreate <app name> <general flag> --pm=<package manager> --fw=<framework> --template=<vite template>

[general flag]
--help    : show help manual
--version : show THE-CREATE version

[general flag]
--git     : initialize git in your app

[package manager]
bun       : 'run with bun',
npm       : 'run with npm',
pnpm      : 'run with pnpm',
yarn      : 'run with yarn',

[framework/library]
angular   : create Angular project
astro     : create Astro project
million   : create Million project
next      : create Next project
nuxt      : create Nuxt project
preact    : create Preact project
qwik      : create Qwik project
redwood   : create Redwood project
remix     : create Remix project
solid     : create SolidStart project
svelte    : create Svelte project
vite      : create Vite based project
vue       : create Vue project

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
