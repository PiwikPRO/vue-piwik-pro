import { readFileSync, writeFileSync } from 'node:fs'

const README = 'README.md'

const file = readFileSync(README, 'utf-8')

const formattedOutput = file
  .replace(
    `**@piwikpro/vue-piwik-pro**

***`,
    ''
  )
  .split('\n')
  // remove additional heading
  .filter((line) => !line.includes('**@piwikpro/vue-piwik-pro**\n***'))
  // remove file reference
  .filter((line) => !line.includes('[@piwikpro/vue-piwik-pro](#globalsmd)'))
  .filter((line) => !line.includes('[**@piwikpro/vue-piwik-pro**](#readmemd)'))
  .filter((line) => !line.includes('## @piwikpro/vue-piwik-pro'))
  // remove links suited for multi page documentation
  .filter((line) => !line.includes('Exports'))
  // remove duplicated header
  .filter((line) => !line.includes('### Functions'))
  // remove remove additional prefix
  .map((line) => line.replace('### Namespaces', '### Table of contents'))
  .map((line) =>
    line.replace('## Piwik PRO Library for VUE', '# Piwik PRO Library for VUE')
  )
  .map((line) => line.replace('Function: ', ''))
  .join('\n')

writeFileSync(README, formattedOutput)
