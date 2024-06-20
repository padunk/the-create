'use strict'

/** @type {import('./type.js')}  */

import * as runner from './runner/index.js'

import { ALIASES, FRAMEWORK, GENERAL_FLAG, HELP_MANUAL } from './constants/index.js'
import path, { dirname } from 'path'

import arg from 'arg'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import inquirer from 'inquirer'

// Get the filename of the current module
export const __filename = fileURLToPath(import.meta.url)

// Get the directory name of the current module
export const __dirname = dirname(__filename)

/**
 * parse CLI arguments into options
 * @param {string[]} rawArgs - arguments from stdin
 * @returns {Options}
 */
function parseArgumentsIntoOptions(rawArgs) {
  let args = arg(
    {
      ...GENERAL_FLAG,
      ...ALIASES,
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    directoryName: args._[0],
    help: args['--help'] || false,
    version: args['--version'] || false,
    pm: args['--package-manager'] || args['--pm'] || 'npm',
    fw: args['--framework'] || args['--fw'],
    template: args['--template'],
  }
}

/**
 * main function
 * @param {string[]} args
 * @returns {Promise<void>}
 */
export async function cli(args) {
  let options = parseArgumentsIntoOptions(args)

  if (options.help) {
    console.log(HELP_MANUAL)
    return
  }
  if (options.version) {
    const pkgJSON = fs.readFileSync(path.resolve(__dirname + '/package.json'), {
      encoding: 'utf-8',
    })
    console.log(JSON.parse(pkgJSON).version)
    return
  }

  if (!options.fw) {
    const result = await inquirer.prompt([
      {
        type: 'list',
        name: 'fw',
        message: chalk.blueBright.bold('Choose your framework'),
        choices: Object.values(FRAMEWORK),
      },
    ])
    options.fw = result.fw
  }

  switch (options.fw.trim().toLowerCase()) {
    case 'analog':
      await runner.runAnalog(options)
      return
    case 'astro':
      await runner.runAstro(options)
      return
    case 'epic':
      await runner.runEpic(options)
      return
    case 'next':
      await runner.runNext(options)
      return
    case 'nuxt':
      await runner.runNuxt(options)
      return
    case 'preact':
      await runner.runPreact(options)
      return
    case 'qwik':
      await runner.runQwik(options)
      return
    case 'reactnative':
      await runner.runReactNative(options)
      return
    case 'redwood':
      await runner.runRedwood(options)
      return
    case 'remix':
      await runner.runRemix(options)
      return
    case 'solidstart':
      await runner.runSolidStart(options)
      return
    case 'sveltekit':
      await runner.runSvelteKit(options)
      return
    case 'umi':
      await runner.runUmi(options)
      return
    case 'vite':
    default:
      await runner.runVite(options)
  }

  return
}
