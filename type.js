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
 * @typedef {'analog' | 'astro' | 'epic'  | 'million' | 'next' | 'nuxt' | 'parcel' | 'preact' | 'qwik' | 'reactnative' | 'redwood' | 'remix' | 'solidstart' | 'sveltekit' | 'umi' | 'vite' } Framework
 */

/**
 * @typedef {Object} Options
 * @property {StringOrBoolean} directoryName - app directory name
 * @property {StringOrBoolean} help - help flag
 * @property {StringOrBoolean} version - version flag
 * @property {ViteTemplates | string} template - Vite template
 * @property {PackageManager} pm - package manager flag
 * @property {Framework} fw - framework flag
 */
