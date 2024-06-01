'use strict'

import { execSync } from 'child_process'

/**
 * Run QwikJS based project
 * @param {PackageManager} packageManager
 * @param {Options} options
 * @returns {Promise<void>}
 */
export async function runQwik(packageManager, options) {
  const command = `${packageManager} create qwik@latest`

  if (packageManager === 'yarn') {
    command.replace('qwik@latest', 'qwik')
  }
  execSync(command, { stdio: 'inherit' })
}
