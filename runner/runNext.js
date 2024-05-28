import { execSync } from 'child_process'

/**
 * Run NextJS based project
 * @param {PackageManager} packageManager
 * @param {Options} options
 * @returns {Promise<void>}
 */
export async function runNext(packageManager, options) {
  let command = `create-next-app@latest`

  if (packageManager === 'bun') {
    command = 'bunx ' + command
  } else {
    command = 'npx ' + command
  }

  execSync(command, { stdio: 'inherit' })
}
