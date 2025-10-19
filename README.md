# Cricket Tournament — Static Site

This repository contains a minimal static site for a cricket tournament.

Files:
- `index.html` — main page
- `styles.css` — site styles
- `script.js` — small client scripts
- `assets/` — images and icons

Run locally (Node):
1. npm install
2. npm start

Run locally (Python):
- python -m http.server 3000
- Open http://localhost:3000 in your browser

Run from VS Code (Live Server):
- Install the "Live Server" extension in VS Code (if not already installed).
- Open this folder in VS Code, open `index.html`, and click the "Go Live" button in the status bar to serve the site locally.

Notes:
- If you don't have Node or Python installed, using the Live Server extension is the easiest way to preview the site.

Deployment
----------

The site is deployed to GitHub Pages at:

https://ziyacraft4u.github.io/ziyacraftcrickets01/

Build status / Pages deploy badge (workflow):

![Deploy](https://github.com/ziyacraft4u/ziyacraftcrickets01/actions/workflows/deploy.yml/badge.svg)

Custom domain (CNAME)
----------------------

To use a custom domain for your Pages site:

1. Replace the placeholder in the repository `CNAME` file with your domain (e.g. `cricket.example.com` or `www.example.com`) and commit the change.
2. Configure your DNS provider:
	- For apex domains (example.com): create an A record pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
	- For subdomains (www.example.com): create a CNAME record pointing to `jgvvdeepika.github.io`.
3. In GitHub, go to the repository Settings → Pages and verify the custom domain. GitHub will provision TLS automatically.
4. Wait for DNS to propagate (may take a few minutes to a few hours). You can verify with `dig` or an online DNS checker.

If you prefer, remove the `CNAME` file and set the custom domain via the Pages settings UI instead.

License: MIT
