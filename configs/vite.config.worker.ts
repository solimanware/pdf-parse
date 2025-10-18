import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'bin/worker',
		emptyOutDir: false,
		sourcemap: false,
		minify: false,
		lib: {
			entry: 'bin/worker/index.ts',
			name: 'PdfParse',
			fileName: (format) => `worker_source.${format === 'es' ? 'js' : 'cjs'}`,
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [
				'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
				'pdfjs-dist/package.json',
				'node:fs',
				'node:path',
				'node:url',
			],
		},
	},
});
