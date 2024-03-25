// vite.config.js

import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react"
import { baseURL } from './config';

export default defineConfig({
    plugins: [react()],
    base: baseURL + "/home",
});
