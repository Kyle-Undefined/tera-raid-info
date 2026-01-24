import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.angular'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/main.ts'
      ]
    }
  },
  resolve: {
    alias: [
      {
        find: /^src\/(.*)$/,
        replacement: resolve(__dirname, 'src/$1')
      }
    ]
  },
  assetsInclude: ['**/*.html']
});