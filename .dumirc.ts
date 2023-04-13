/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 13:58:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-13 14:40:02
 * @FilePath: /wolf/.dumirc.ts
 * @Description:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  mfsu: {},
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'wolfya',
  },
});
