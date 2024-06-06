'use strict'

import { execSync } from 'child_process'

/**
 * Run EpicStack based project
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runEpic(options) {
  let command = `npx create-epic-app@latest`

  if (options.pm === 'bun') {
    command.replace('npx', 'bunx')
  }

  execSync(command, { stdio: 'inherit' })
}
