import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-debugger': 'off',
      'no-undef': 'off',
      'scss/double-slash-comment-whitespace-inside': 'off',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/ban-types': [
        'error',
        {
          extendDefaults: true,
          types: {
            '{}': false
          }
        }
      ]
    }
  },
  {
    files: ['*.cjs'],
    rules: {
      'no-undef': 'off',
      'constructor-super': 'off'
    }
  }
]
