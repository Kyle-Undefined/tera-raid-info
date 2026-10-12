// Serve the production base path and simulate GitHub Pages' actual 404 redirect.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../dist/browser');
const types = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.png': 'image/png',
	'.gif': 'image/gif',
	'.ico': 'image/x-icon',
	'.svg': 'image/svg+xml',
};
http
	.createServer((req, res) => {
		const url = new URL(req.url, 'http://127.0.0.1');
		let relative;
		try {
			relative = decodeURIComponent(
				url.pathname.replace(/^\/tera-raid-info\//, '')
			);
		} catch {
			res.writeHead(400).end();
			return;
		}
		const file = path.resolve(root, relative || 'index.html');
		if (!file.startsWith(root + path.sep)) {
			res.writeHead(404).end();
			return;
		}
		if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			res.end(fs.readFileSync(path.join(root, '404.html')));
			return;
		}
		res.writeHead(200, {
			'Content-Type': types[path.extname(file)] || 'application/octet-stream',
		});
		fs.createReadStream(file).pipe(res);
	})
	.listen(4173, '127.0.0.1');
