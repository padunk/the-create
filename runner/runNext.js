'use strict'

import { execSync } from 'child_process'

/**
 * Run NextJS based project
 * @param {PackageManager} packageManager - package manager
 * @param {Options} options - Options object
 */
export async function runNext(packageManager, options) {
  let command = `create-next-app@latest`

  if (packageManager === 'bun') {
    command = 'bunx ' + command
  } else {
    command = 'npx ' + command
  }

  execSync(command, { stdio: 'inherit' })
}
