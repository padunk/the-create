'use strict'

import { execSync } from 'child_process'
import { isNodeVersionGte } from '../utils/index.js'

/**
 * Run RedwoodJS based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runUmi(options) {
  const minNodeVersion = 18
  const isNodeVersionOk = await isNodeVersionGte(minNodeVersion)
  if (!isNodeVersionOk) {
    console.log(`Please upgrade Node to v${minNodeVersion}`)
    return
  }

  let command = `create-umi@latest`
  switch (options.pm) {
    case 'bun':
      command = `bunx ${command}`
      break
    case 'pnpm':
      command = `pnpm dlx ${command}`
      break
    case 'yarn':
      command = `yarn ${command}`
      break
    default:
      command = `npx ${command}`
      break
  }

  if (options.template) {
    command = `${command} --template ${options.template}`
  }

  execSync(command, { stdio: 'inherit' })
}
