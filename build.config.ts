import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: './src/css/',
      outDir: './',
    },
  ],
  declaration: 'node16',
  clean: true,
})
