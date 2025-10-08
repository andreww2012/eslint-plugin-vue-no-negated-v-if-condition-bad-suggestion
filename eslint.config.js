import eslintPluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import vueEslintParser from 'vue-eslint-parser';

export default defineConfig([
  {
    files: ['*.vue'],
    plugins: {
      vue: eslintPluginVue,
    },
    languageOptions: {
      parser: vueEslintParser,
    },
    rules: {
      'vue/no-negated-v-if-condition': 2,
    },
  },
]);
