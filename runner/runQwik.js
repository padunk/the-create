'use strict'

import { execSync } from 'child_process'

/**
 * Run QwikJS based project
 * @param {Options} options
 * @returns {Promise<void>}
 */
export async function runQwik(options) {
  const command = `${options.pm} create qwik@latest`

  if (options.pm === 'yarn') {
    command.replace('qwik@latest', 'qwik')
  }
  execSync(command, { stdio: 'inherit' })
}
