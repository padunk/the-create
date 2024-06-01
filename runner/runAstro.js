'use strict'

import { execSync } from 'child_process'

/**
 * Run Astro based project
 * @param {Options} options - Options object
 * @returns {Promise<void>}
 */
export async function runAstro(options) {
  let command = `${options.pm} create astro`

  if (options.pm === 'npm' || options.pm === 'pnpm') {
    command.replace('astro', 'astro@latest')
    if (options.template) {
      command = `${command} -- --template ${options.template}`
    }
    execSync(command, { stdio: 'inherit' })
  } else {
    if (options.template) {
      command = `${command} --template ${options.template}`
    }
    execSync(command, { stdio: 'inherit' })
  }
}
