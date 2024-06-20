'use strict'

import { execSync } from 'child_process'

/**
 * Run React Native based project
 * @param {Options} options
 * @returns {Promise<void>}
 */
export async function runReactNative(options) {
  const command = `npx create-expo-app ${options.directoryName}`

  if (options.pm === 'bun') {
    command.replace('npx', 'bunx')
  }
  if (options.template) {
    command += ` --template ${options.template}`
  }
  execSync(command, { stdio: 'inherit' })
}
