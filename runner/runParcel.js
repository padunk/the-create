'use strict'

import { DEFAULT_TEMPLATE, PARCEL_TEMPLATES } from '../constants/index.js'
import { checkDirectoryName, checkTemplate } from '../utils/index.js'

import { execSync } from 'child_process'

/**
 * Check parcel template arguments
 * @param {Options} options - Options object
 * @returns {Promise<Options>}
 */
async function checkParcelOptions(options) {
  options = await checkDirectoryName(options)
  options = await checkTemplate(options, PARCEL_TEMPLATES, DEFAULT_TEMPLATE)

  return options
}

/**
 * Run Parcel based project
 * @param {Options} opts - Options object
 * @returns {Promise<void>}
 */
export async function runParcel(opts) {
  const options = await checkParcelOptions(opts)

  execSync(`${options.pm} create parcel ${options.template} ${options.directoryName}`, {
    stdio: 'inherit',
  })
}
