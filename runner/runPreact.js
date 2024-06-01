'use strict'

import chalk from 'chalk'
import { execSync } from 'child_process'
import inquirer from 'inquirer'
import { runVite } from './runVite.js'

/**
 * Run PreactJS based project
 * @param {PackageManager} packageManager
 * @param {Options} options
 * @returns {Promise<undefined | void>}
 */
export async function runPreact(packageManager, options) {
  const isRunWithVite = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ok',
      message: chalk.cyanBright.bold('Preact is better to create with Vite'),
      default: true,
    },
  ])

  if (isRunWithVite.ok) {
    runVite(packageManager, options)
    return
  }
  const command = `npm init preact`
  execSync(command, { stdio: 'inherit' })
}
