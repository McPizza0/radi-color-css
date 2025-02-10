import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: './src/css/',
      outDir: './dist/',
    },
  ],
  declaration: 'node16',
  clean: true,
})
