'use strict'

import { execSync } from 'child_process'

/**
 * Run OneStack based project
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runOne(options) {
  let command = `one`

  if (options.pm === 'bun') {
    command = 'bunx ' + command
  } else {
    command = 'npx ' + command
  }

  execSync(command, { stdio: 'inherit' })
}
