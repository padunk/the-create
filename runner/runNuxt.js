'use strict'

import { checkDirectoryName } from '../utils/index.js'
import { execSync } from 'child_process'

/**
 * Run NuxtJS based project
 * @param {PackageManager} packageManager - package manager
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runNuxt(packageManager, options) {
  options = checkDirectoryName(options)

  let command = `nuxi@latest init ${options.directoryName}`

  switch (packageManager) {
    case 'pnpm':
      command = 'pnpm dlx ' + command
      break
    case 'bun':
      command = 'bunx ' + command
      break
    default:
      command = 'npx ' + command
      break
  }

  execSync(command, { stdio: 'inherit' })
}
