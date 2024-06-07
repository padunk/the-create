'use strict'

import { checkDirectoryName, getVersion, isNodeVersionGte } from '../utils/index.js'

import { execSync } from 'child_process'

/**
 * Run RedwoodJS based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runRedwood(options) {
  const packageManagerRequired = 'yarn'
  const currentYarnVersion = await getVersion(packageManagerRequired)
  const minYarnVersion = '1.22.22'
  if (currentYarnVersion !== minYarnVersion) {
    console.log(`Please install ${packageManagerRequired} v.${minPackageManagerVersion}`)
    return
  }

  const minNodeVersion = 20
  const isNodeVersionOk = await isNodeVersionGte(minNodeVersion)
  if (!isNodeVersionOk) {
    console.log(`Please upgrade Node to v.${minNodeVersion}`)
    return
  }

  const opts = await checkDirectoryName(options)
  const command = `yarn create redwood-app ${opts.directoryName}`
  execSync(command, { stdio: 'inherit' })
}
