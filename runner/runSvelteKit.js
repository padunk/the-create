'use strict'

import { checkDirectoryName } from '../utils/index.js'
import { execSync } from 'child_process'

/**
 * Run SvelteKit based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runSvelteKit(options) {
  options = await checkDirectoryName(options)

  const command = `${options.pm} create svelte@latest`

  execSync(command, { stdio: 'inherit' })
}
