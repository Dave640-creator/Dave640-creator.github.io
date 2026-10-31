import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base '/' works for a user site like Dave640-creator.github.io.
// For a project page (username.github.io/repo-name) set base: '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
