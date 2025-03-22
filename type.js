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
 * @typedef {'analog' | 'astro' | 'epic'  | 'lynx' | 'million' | 'next' | 'nuxt' | 'one' | 'parcel' | 'phoenix' |  'preact' | 'qwik' | 'reactnative' | 'redwood' | 'remix' | 'solidstart' | 'superkit' | 'sveltekit' | 'rts' | 'umi' | 'vite' | 'waku' } Framework
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
