export default {
  esm: {
    transformer: 'babel',
  },
  umd: {
    name: 'umd',
    entry: './src/index.ts',
    chainWebpack: (memo: any) => {
      memo.output.libraryExport('default');
      return memo;
    },
  },
};
