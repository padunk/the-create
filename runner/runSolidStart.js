'use strict'

import { execSync } from 'child_process'

/**
 * Run SolidStart based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runSolidStart(options) {
  let command = 'npm init solid@latest'

  if (options.pm !== 'npm') {
    command = `${options.pm} create solid`
  }

  execSync(command, { stdio: 'inherit' })
}
