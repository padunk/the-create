'use strict'

import { DEFAULT_APP_NAME } from '../constants/index.js'
import chalk from 'chalk'
import inquirer from 'inquirer'

export async function missingOptions(options) {
  let defaultDirectoryName = 'my-app'
  let defaultTemplate = 'JavaScript'

  if (options.skipPrompts) {
    return {
      ...options,
      directoryName: defaultDirectoryName,
      template: options.template || defaultTemplate,
    }
  }

  let questions = []
  if (!options.directoryName) {
    questions.push({
      type: 'input',
      name: 'directoryName',
      message: "What's your project name?",
      default: defaultDirectoryName,
    })
  }
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: chalk.yellow.bold('Choose your project template'),
      choices: [
        'JavaScript',
        'TypeScript',
        'React',
        'Svelte',
        'Node',
        'Deno',
        'React-Snowpack',
        'Svelte-Snowpack',
      ],
      default: defaultTemplate,
    })
  }
  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    })
  }

  let answers
  try {
    answers = await inquirer.prompt(questions)
  } catch (error) {
    throw new Error(error)
  }

  return {
    ...options,
    directoryName: options.directoryName || answers.directoryName,
    template: options.template || answers.template,
    git: options.git || answers.git,
  }
}

/**
 * function to check if directoryName exist in options
 * @param {Options} options - Options object
 * @returns {Promise<Options>}
 */
export async function checkDirectoryName(options) {
  if (!options.directoryName) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'directoryName',
        message: chalk.cyanBright.bold("What's your app/project name?"),
        default: DEFAULT_APP_NAME,
      },
    ])
    options.directoryName = answers.directoryName
  }
  return options
}

/**
 * function to check if template exist in options
 * @param {Options} options - Options object
 * @param {any} list - template list
 * @param {any} defaultList - template default list
 * @returns {Promise<Options>}
 */
export async function checkTemplate(options, list, defaultList) {
  if (!options.template) {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: chalk.yellow.bold('Choose your template'),
        choices: list,
        default: defaultList,
      },
    ])
    options.template = answers.template
  }
  return options
}
