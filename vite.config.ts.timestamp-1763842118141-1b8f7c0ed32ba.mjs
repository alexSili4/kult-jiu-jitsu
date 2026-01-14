// vite.config.ts
import { defineConfig } from "file:///D:/work/sunAgency/kult-jiu-jitsu/node_modules/vite/dist/node/index.js";
import react from "file:///D:/work/sunAgency/kult-jiu-jitsu/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/work/sunAgency/kult-jiu-jitsu/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
      "@CommonComponents": "/src/components/common",
      "@ErrorPageComponents": "/src/components/ErrorPage",
      "@MainPageComponents": "/src/components/MainPage",
      // animations
      "@AnimatedMainPageComponents": "/src/components/Animated/MainPage",
      "@AnimatedGeneralComponents": "/src/components/Animated/General"
    }
  },
  build: {
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || "";
          if (fileName.endsWith(".css")) {
            return "css/[name][extname]";
          }
          if (fileName.endsWith(".ttf")) {
            return "fonts/[name][extname]";
          }
          if (fileName.endsWith(".mp4")) {
            return "video/[name][extname]";
          }
          if (fileName.endsWith(".jpg") || fileName.endsWith(".png")) {
            return "images/[name][extname]";
          }
          return "assets/[name][extname]";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrXFxcXHN1bkFnZW5jeVxcXFxrdWx0LWppdS1qaXRzdVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd29ya1xcXFxzdW5BZ2VuY3lcXFxca3VsdC1qaXUtaml0c3VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dvcmsvc3VuQWdlbmN5L2t1bHQtaml1LWppdHN1L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6ICcvc3JjJyxcclxuICAgICAgJ0BDb21tb25Db21wb25lbnRzJzogJy9zcmMvY29tcG9uZW50cy9jb21tb24nLFxyXG4gICAgICAnQEVycm9yUGFnZUNvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL0Vycm9yUGFnZScsXHJcbiAgICAgICdATWFpblBhZ2VDb21wb25lbnRzJzogJy9zcmMvY29tcG9uZW50cy9NYWluUGFnZScsXHJcbiAgICAgIC8vIGFuaW1hdGlvbnNcclxuICAgICAgJ0BBbmltYXRlZE1haW5QYWdlQ29tcG9uZW50cyc6ICcvc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWQvTWFpblBhZ2UnLFxyXG4gICAgICAnQEFuaW1hdGVkR2VuZXJhbENvbXBvbmVudHMnOiAnL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkL0dlbmVyYWwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMCxcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2pzL1tuYW1lXS5qcycsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdqcy9bbmFtZV0uanMnLFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGFzc2V0SW5mby5uYW1lIHx8ICcnO1xyXG5cclxuICAgICAgICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aCgnLmNzcycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnY3NzL1tuYW1lXVtleHRuYW1lXSc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKCcudHRmJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdmb250cy9bbmFtZV1bZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aCgnLm1wNCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndmlkZW8vW25hbWVdW2V4dG5hbWVdJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoJy5qcGcnKSB8fCBmaWxlTmFtZS5lbmRzV2l0aCgnLnBuZycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaW1hZ2VzL1tuYW1lXVtleHRuYW1lXSc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUixTQUFTLG9CQUFvQjtBQUN2VCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDekIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wscUJBQXFCO0FBQUEsTUFDckIsd0JBQXdCO0FBQUEsTUFDeEIsdUJBQXVCO0FBQUE7QUFBQSxNQUV2QiwrQkFBK0I7QUFBQSxNQUMvQiw4QkFBOEI7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUFBLElBQ25CLGFBQWE7QUFBQSxJQUNiLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsZ0JBQU0sV0FBVyxVQUFVLFFBQVE7QUFFbkMsY0FBSSxTQUFTLFNBQVMsTUFBTSxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksU0FBUyxTQUFTLE1BQU0sR0FBRztBQUM3QixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLFNBQVMsU0FBUyxNQUFNLEdBQUc7QUFDN0IsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxTQUFTLFNBQVMsTUFBTSxLQUFLLFNBQVMsU0FBUyxNQUFNLEdBQUc7QUFDMUQsbUJBQU87QUFBQSxVQUNUO0FBRUEsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
