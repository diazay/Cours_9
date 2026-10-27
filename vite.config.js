import { defineConfig } from 'vite';
 
export default defineConfig({
    base: "/Cours_9/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});