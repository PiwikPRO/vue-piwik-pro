// bake the version from package.json into a generated module so the source
// does not import package.json directly (keeps it out of the bundle/source maps)
import { readFileSync, writeFileSync } from 'node:fs'

const pkg = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8')
)

writeFileSync(
  new URL('../src/version.ts', import.meta.url),
  `export const VERSION = ${JSON.stringify(pkg.version)}\n`
)
