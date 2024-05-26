/**
 * @typedef {string | boolean} StringOrBoolean
 */

/**
 * @typedef { 'vanilla' | 'vanilla-ts' } ViteTemplates
 */

/**
 * @typedef { 'bun' | 'npm' | 'pnpm' | 'yarn' } PackageManager
 */

/**
 * @typedef {'angular' | 'astro' | 'million' | 'next' | 'nuxt' | 'parcel' | 'preact' | 'qwik' | 'redwood' | 'remix' | 'solid' | 'svelte' | 'vite' | 'vue' } Framework
 */

/**
 * @typedef {Object} Options
 * @property {StringOrBoolean} directoryName - app directory name
 * @property {StringOrBoolean} help - help flag
 * @property {StringOrBoolean} version - version flag
 * @property {ViteTemplates} template - Vite template
 * @property {PackageManager} pm - package manager flag
 * @property {Framework} fw - framework flag
 */
