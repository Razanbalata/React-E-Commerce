import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // تقسيم المكتبات الكبيرة إلى ملفات مستقلة
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // لو بدك تخفي التحذير كليًا (اختياري)
  },
});
