import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint' // 引入eslint插件
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，需要安装一下 @types/node --> npm i @types/node -D
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 导入terser插件进行代码压缩
import { terser } from 'rollup-plugin-terser'
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL, VITE_BASE_API } = loadEnv(mode, process.cwd())

  return {
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      // 配置vite在运行的时候自动检测eslint规范
      (eslintPlugin as any)({
        include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue']
      }),
      createSvgIconsPlugin({
        // 图标文件夹路径
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 符合该格式的唯一标识符，用于创建对应的 SVG 图标
        symbolId: '[name]',
        // 将生成的 SVG 图标注入到文档中的位置
        inject: 'body-last',
        // 自定义的 DOM 元素 ID
        customDomId: '__svg__icons__dom__'
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        //设置'@'指向'src'目录
        '@': resolve(__dirname, 'src/')
      }
    },
    server: {
      port: 8089, //设置服务启动端口号
      open: true, //设置服务启动后是否自动打开浏览器
      cors: true, //允许跨域
      //设置代理
      proxy: {
        '/api': {
          target: VITE_BASE_API, //设置代理目标
          changeOrigin: true //是否修改目标源
          // rewrite: (path) => path.replace(/^\/api/, '') //设置路径重写
        }
      }
    },
    build: {
      // 配置插件
      rollupOptions: {
        plugins: [terser()],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      },
      // 指定目标浏览器版本
      target: 'es2015',
      // 开启代码分割
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩
      brotliSize: true,
      // 启用/禁用压缩
      minify: 'terser',
      // 启用/禁用生产源映射
      sourcemap: false
    },
    // 启用/禁用缓存
    cacheDir: '.cache'
  }
}
