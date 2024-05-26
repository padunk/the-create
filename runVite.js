import { DEFAULT_VITE_TEMPLATE, VITE_TEMPLATES } from './constants/index.js'

import chalk from 'chalk'
import { execa } from 'execa'
import inquirer from 'inquirer'

/**
 * Check vite template arguments
 * @param {Options} options
 * @returns {Options}
 */
async function checkViteOptions(options) {
  let answers = { template: options.template }
  if (!options.template) {
    answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: chalk.yellow.bold('Choose your template'),
        choices: VITE_TEMPLATES,
        default: DEFAULT_VITE_TEMPLATE,
      },
    ])
  }

  return {
    ...options,
    ...answers,
  }
}

/**
 * Run Vite based project
 * @param {PackageManager} packageManager
 * @param {Options} opts
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
