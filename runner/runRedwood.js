'use strict'

import chalk from 'chalk'
import { checkDirectoryName } from '../utils/index.js'
import { execSync } from 'child_process'
import inquirer from 'inquirer'

/**
 * Run RedwoodJS based project
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runRedwood(options) {
  const opts = checkDirectoryName(options)

  if (options.pm !== 'yarn') {
    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'ok',
        message: chalk.cyanBright.bold('Do you have YARN install?'),
        default: false,
      },
    ])
    if (!answers.ok) {
      console.log('Please install YARN: npm i -g yarn')
      return
    }
  }

  const command = `yarn create redwood-app ${opts.directoryName}`
  execSync(command, { stdio: 'inherit' })
}
