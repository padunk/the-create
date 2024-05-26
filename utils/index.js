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
