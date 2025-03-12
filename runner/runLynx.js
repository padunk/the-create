'use strict'

import { execSync } from 'child_process'

/**
 * Run Lynx based project
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runLynx(options) {
  let command = `${options.pm} create rspeedy@latest`

  if (options.pm === 'yarn') {
    command = `${options.pm} create rspeedy`
  }

  execSync(command, { stdio: 'inherit' })
}
