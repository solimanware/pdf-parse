import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export function getWorkerSource() {
	try {
		// Try to resolve the pdfjs-dist package
		let workerPath: string;
		
		// Check if we're in ESM or CJS context
		if (typeof import.meta?.resolve === 'function') {
			// ESM: use import.meta.resolve
			workerPath = fileURLToPath(import.meta.resolve('pdfjs-dist/legacy/build/pdf.worker.min.mjs'));
		} else {
			// CJS fallback: construct path from pdfjs-dist
			const pdfjsPath = require.resolve('pdfjs-dist/package.json');
			workerPath = join(dirname(pdfjsPath), 'legacy/build/pdf.worker.min.mjs');
		}
		
		const workerContent = readFileSync(workerPath, 'utf-8');
		// Convert to base64 data URL
		return `data:application/javascript;base64,${Buffer.from(workerContent).toString('base64')}`;
	} catch (error) {
		// Fallback: return the module path as-is
		return 'pdfjs-dist/legacy/build/pdf.worker.min.mjs';
	}
}
