'use strict'

import { execSync } from 'child_process'
import { isNodeVersionGte } from '../utils/index.js'

/**
 * Run RemixJS based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runWaku(options) {
  const minNodeVersion = 18
  const isNodeVersionOk = await isNodeVersionGte(minNodeVersion)
  if (!isNodeVersionOk) {
    console.log(`Please upgrade Node to v.${minNodeVersion}`)
    return
  }

  const command = `${options.pm} create waku@latest`

  execSync(command, { stdio: 'inherit' })
}
