'use strict'

import { DEFAULT_TEMPLATE, VITE_TEMPLATES } from '../constants/index.js'
import { checkDirectoryName, checkTemplate } from '../utils/index.js'

import { execa } from 'execa'

/**
 * Check vite template arguments
 * @param {Options} options - Options object
 * @returns {Promise<Options>}
 */
async function checkViteOptions(options) {
  options = await checkDirectoryName(options)
  options = await checkTemplate(options, VITE_TEMPLATES, DEFAULT_TEMPLATE)

  return options
}

/**
 * Run Vite based project
 * @param {Options} opts - Options object
 * @returns {Promise<void>}
 */
export async function runVite(opts) {
  const options = await checkViteOptions(opts)

  if (options.pm === 'npm') {
    // npm 7+, extra double dash is needed:
    await execa(options.pm, [
      'create',
      'vite@latest',
      options.directoryName,
      '--',
      '--template',
      options.template,
    ])
  } else {
    await execa(options.pm, [
      'create',
      'vite',
      options.directoryName,
      '--template',
      options.template,
    ])
  }
}
