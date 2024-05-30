'use strict'

import { DEFAULT_VITE_TEMPLATE, VITE_TEMPLATES } from '../constants/index.js'
import { checkDirectoryName, checkTemplate } from '../utils/index.js'

import { execa } from 'execa'

/**
 * Check vite template arguments
 * @param {Options} options - Options object
 * @returns {Options}
 */
async function checkViteOptions(options) {
  options = await checkDirectoryName(options)
  options = await checkTemplate(options, VITE_TEMPLATES, DEFAULT_VITE_TEMPLATE)

  return options
}

/**
 * Run Vite based project
 * @param {PackageManager} packageManager - package manager
 * @param {Options} opts - Options object
 * @returns {void}
 */
export async function runVite(packageManager, opts) {
  const options = await checkViteOptions(opts)

  if (packageManager === 'npm') {
    // npm 7+, extra double dash is needed:
    await execa(packageManager, [
      'create',
      'vite@latest',
      options.directoryName,
      '--',
      '--template',
      options.template,
    ])
  } else {
    await execa(packageManager, [
      'create',
      'vite',
      options.directoryName,
      '--template',
      options.template,
    ])
  }
}
