'use strict'

import { checkDirectoryName } from '../utils/index.js'
import { execSync } from 'child_process'

async function checkOptions(options) {
  options = await checkDirectoryName(options)
  return options
}

/**
 * Run SolidStart based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runRTS(opts) {
  const options = await checkOptions(opts)

  let command = `npx degit padunk/react-tanning ${options.directoryName}`

  if (options.pm !== 'npm') {
    command = `${options.pm} ${command}`
  }

  execSync(command, { stdio: 'inherit' })
}
