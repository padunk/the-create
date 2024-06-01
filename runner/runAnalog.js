'use strict'

import { execSync } from 'child_process'

/**
 * Run AnalogJS based project
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runAnalog(options) {
  let command = `${options.pm} create analog@latest`

  if (options.pm !== 'npm') {
    command.replace('@latest', '')
  }

  execSync(command, { stdio: 'inherit' })
}
