export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat', 'chore', 'docs', 'style', 'ci', 'test', 'refactot', 'revert']]
  }
}
