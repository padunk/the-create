import { execSync } from 'child_process'

/**
 * Run NuxtJS based project
 * @param {PackageManager} packageManager
 * @param {Options} options
 * @returns {Promise<void>}
 */
export async function runNuxt(packageManager, options) {
  let command = `nuxi@latest init ${options.directoryName}`

  if (packageManager === 'pnpm') {
    command = 'pnpm dlx ' + command
  } else if (packageManager === 'bun') {
    command = 'bunx ' + command
  } else {
    command = 'npx ' + command
  }

  execSync(command, { stdio: 'inherit' })
}
