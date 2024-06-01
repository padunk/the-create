'use strict'

import { execSync } from 'child_process'

/**
 * Run NextJS based project
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runNext(options) {
  let command = `create-next-app@latest`

  if (options.pm === 'bun') {
    command = 'bunx ' + command
  } else {
    command = 'npx ' + command
  }

  execSync(command, { stdio: 'inherit' })
}
