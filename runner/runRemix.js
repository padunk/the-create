'use strict'

import { execSync } from 'child_process'

/**
 * Run RemixJS based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runRemix(options) {
  const command = `npx create-remix@latest`

  if (options.pm === 'bun') {
    command.replace('npx', 'bunx')
  }

  execSync(command, { stdio: 'inherit' })
}
