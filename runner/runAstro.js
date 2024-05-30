'use strict'

import { execSync } from 'child_process'

/**
 * Run Astro based project
 * @param {PackageManager} packageManager - package manager
 * @param {Options} options - Options object
 * @returns {void}
 */
export async function runAstro(packageManager, options) {
  let command = `${packageManager} create astro`

  if (packageManager === 'npm' || packageManager === 'pnpm') {
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
