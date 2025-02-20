import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcsss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        react(),
        tailwindcsss(),
    ]
})
