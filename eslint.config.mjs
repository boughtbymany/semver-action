import js from '@eslint/js'
import neostandard from 'neostandard'

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  js.configs.recommended,
  ...neostandard(),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
]
